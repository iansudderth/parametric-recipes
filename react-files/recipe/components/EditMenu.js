import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Settings from 'material-ui-icons/Settings';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { recipeLogin } from '../actions';

const styles = {
  menuContainer: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    outline: 'none',
  },
  buttonWrapper: {
    padding: 8,
  },
  dialogContainer: {
    padding: 16,
  },
  passwordInput: {
    paddingRight: 8,
  },
};

class EditMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      anchorEl: null,
      dialogOpen: false,
    };
  }

  handleMenuOpen = event => {
    console.log(event);
    this.setState({ menuOpen: true, anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ menuOpen: false });
  };

  handleDialogOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  submitPassword = event => {
    event.preventDefault();
    this.props.recipeLogin(this.props.recipeId, this.passwordInput.value);
  };

  passwordRef = el => {
    this.passwordInput = el;
  };

  render() {
    const {
      menuContainer,
      buttonWrapper,
      passwordInput,
      dialogContainer,
    } = this.props.classes;
    return (
      <div>
        <IconButton onClick={this.handleMenuOpen}>
          <Settings />
        </IconButton>
        <Menu
          open={this.state.menuOpen}
          anchorEl={this.state.anchorEl}
          onRequestClose={this.handleMenuClose}
        >
          <div className={menuContainer}>
            {this.props.recipeHasPassword ? (
              <div className={buttonWrapper}>
                <Button raised color="primary" onClick={this.handleDialogOpen}>
                  {'Edit Recipe'}
                </Button>
              </div>
            ) : (
              ''
            )}
            <div className={buttonWrapper}>
              <Button raised color="primary">
                {'New Recipe from Copy'}
              </Button>
            </div>
          </div>
        </Menu>
        <Dialog
          open={this.state.dialogOpen}
          onRequestClose={this.handleDialogClose}
        >
          <DialogTitle align="center">{'Enter Recipe Password'}</DialogTitle>
          <div className={dialogContainer}>
            <form onSubmit={this.submitPassword}>
              <TextField
                label="Password"
                type="password"
                className={passwordInput}
                inputRef={this.passwordRef}
              />
              <Button color="primary" raised>
                {'Submit'}
              </Button>
            </form>
          </div>
        </Dialog>
      </div>
    );
  }
}

EditMenu.propTypes = {};

EditMenu.defaultProps = {};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ recipeLogin }, dispatch);
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(EditMenu));
