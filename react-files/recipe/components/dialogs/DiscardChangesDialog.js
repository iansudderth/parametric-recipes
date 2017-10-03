import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DialogWrapper from './DialogWrapper';
import { closeDiscardChangesDialog, discardChanges } from '../../actions';

const styles = {};

class DiscardChangesDialog extends Component {
  render() {
    return (
      <DialogWrapper>
        <div>{'Stuff'}</div>
      </DialogWrapper>
    );
  }
}

function mapStateToProps({ discardChangesDialog, recipe }) {
  return { discardChanges, recipe };
}

function mapDispatchToProps(dispatch) {
  bindActionCreators(
    {
      closeDiscardChangesDialog,
      discardChanges,
    },
    dispatch
  );
}

DiscardChangesDialog.propTypes = {};

DiscardChangesDialog.defaultProps = {};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(DiscardChangesDialog)
);
