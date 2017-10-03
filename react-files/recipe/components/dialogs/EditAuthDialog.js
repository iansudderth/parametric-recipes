import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DialogWrapper from './DialogWrapper';
import { closeEditAuthDialog, editAuth } from '../../actions';

const styles = {};

class EditAuthDialog extends Component {
  render() {
    return (
      <DialogWrapper>
        <div>{'Stuff'}</div>
      </DialogWrapper>
    );
  }
}

function mapStateToProps({ editAuthDialog, recipe }) {
  return {
    editAuthDialog,
    recipe,
  };
}

function mapDispatchToProps(dispatch) {
  bindActionCreators(
    {
      closeEditAuthDialog,
      editAuth,
    },
    dispatch
  );
}

EditAuthDialog.propTypes = {};

EditAuthDialog.defaultProps = {};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(EditAuthDialog)
);
