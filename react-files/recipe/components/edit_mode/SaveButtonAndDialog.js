import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = {
  dialogContainer: {
    padding: 16,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
};

class SaveButtonAndDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  closeDialog = () => {
    this.setState({ open: false });
  };

  openDialog = () => {
    this.setState({ open: true });
  };

  saveClickHandler = () => {
    this.openDialog();
  };

  render() {
    const { dialogContainer, buttonContainer } = this.props.classes;
    return (
      <div>
        <Button color="primary" raised onClick={this.saveClickHandler}>
          Save & Publish
        </Button>
        <Dialog open={this.state.open} onRequestClose={this.closeDialog}>
          <div className={dialogContainer}>
            <DialogTitle>{'Create Password to Enable Editing?'}</DialogTitle>
            <div className={buttonContainer}>
              <Button raised color="primary" onClick={this.props.publishRecipe}>
                {'Publish without Password'}
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

SaveButtonAndDialog.propTypes = {};

SaveButtonAndDialog.defaultProps = {};

export default withStyles(styles)(SaveButtonAndDialog);
