import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'material-ui/Button';
import { DialogTitle } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { closeSaveDialog, saveNewRecipe } from '../../actions';

import DialogWrapper from './DialogWrapper';
import ProgressSpinner from './ProgressSpinner';

const styles = {
  dialogContainer: {
    padding: 16,
    textAlign: 'center',
  },
  noPassContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 16,
  },
  passwordContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: 16,
  },
  passwordField: {
    flexGrow: 1,
    paddingRight: 16,
  },
};

class SaveDialog extends Component {
  inputRef = el => {
    this.passwordInput = el;
  };
  saveRecipeWithPassword = () => {
    const password = this.passwordInput.value;
    this.props.saveNewRecipe(this.props.recipe, password);
  };
  saveRecipeWithNoPassword = () => {
    this.props.saveNewRecipe(this.props.recipe, null);
  };

  innerContent = () => {
    const {
      dialogContainer,
      passwordContainer,
      passwordField,
      noPassContainer,
    } = this.props.classes;
    return (
      <div className={dialogContainer}>
        <DialogTitle>{'Create Password to Enable Editing?'}</DialogTitle>
        <Typography>
          {
            "If you want to edit the recipe later, you'll need to set a password "
          }
        </Typography>
        <form onSubmit={this.saveRecipeWithPassword}>
          <div className={passwordContainer}>
            <TextField
              id="password"
              label="Password"
              type="password"
              margin="normal"
              className={passwordField}
              inputRef={this.inputRef}
            />
            <Button
              color="primary"
              raised
              onClick={this.saveRecipeWithPassword}
            >
              {'Save and Publish'}
            </Button>
          </div>
        </form>
        <Divider />
        <div className={noPassContainer}>
          <Typography>
            {
              'You can still publish a recipe without setting a password, however you will not be able to edit it later if you need to make corrections or updates'
            }
          </Typography>
          <br />
          <Button
            raised
            color="primary"
            onClick={this.saveRecipeWithNoPassword}
          >
            {'Publish without Password'}
          </Button>
        </div>
      </div>
    );
  };
  render() {
    const {
      dialogContainer,
      passwordContainer,
      passwordField,
      noPassContainer,
    } = this.props.classes;

    return (
      <DialogWrapper
        dialogCloseAction={this.props.closeSaveDialog}
        dialogIsOpen={this.props.saveDialog.open}
      >
        {(() => {
          switch (this.props.saveDialog.status) {
            case 'PROGRESS': {
              return <ProgressSpinner />;
            }
            case 'INITIAL':
            default: {
              return this.innerContent();
            }
          }
        })()}
      </DialogWrapper>
    );
  }
}

function mapStateToProps({ saveDialog, recipe }) {
  return { saveDialog, recipe };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeSaveDialog, saveNewRecipe }, dispatch);
}

SaveDialog.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  saveDialog: PropTypes.shape({
    open: PropTypes.Bool,
    status: PropTypes.string,
  }).isRequired,
  closeSaveDialog: PropTypes.func.isRequired,
  saveNewRecipe: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
};

SaveDialog.defaultProps = {};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SaveDialog)
);
