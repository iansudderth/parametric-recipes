import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DialogWrapper from './DialogWrapper';
import {
  closeDeleteDialog,
  deleteRecipe,
  deleteRecipeWithPassword,
} from '../../actions';

const styles = {};

class DeleteDialog extends Component {
  render() {
    return (
      <DialogWrapper>
        <div>{'Stuff'}</div>
      </DialogWrapper>
    );
  }
}

function mapStateToProps({ deleteDialog, recipe }) {
  return { deleteDialog, recipe };
}

function mapDispatchToProps(dispatch) {
  bindActionCreators(
    {
      closeDeleteDialog,
      deleteRecipe,
      deleteRecipeWithPassword,
    },
    dispatch
  );
}

DeleteDialog.propTypes = {};

DeleteDialog.defaultProps = {};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(DeleteDialog)
);
