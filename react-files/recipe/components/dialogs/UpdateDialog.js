import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DialogWrapper from './DialogWrapper';
import {
  closeUpdateDialog,
  updateRecipe,
  updateRecipeWithPassword,
} from '../../actions';

const styles = {};

class UpdateDialog extends Component {
  render() {
    return (
      <DialogWrapper>
        <div>{'Stuff'}</div>
      </DialogWrapper>
    );
  }
}

function mapStateToProps({ updateDialog, recipe }) {
  return {
    updateDialog,
    recipe,
  };
}

function mapDispatchToProps(dispatch) {
  bindActionCreators(
    { closeUpdateDialog, updateRecipe, updateRecipeWithPassword },
    dispatch
  );
}

UpdateDialog.propTypes = {};

UpdateDialog.defaultProps = {};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(UpdateDialog)
);
