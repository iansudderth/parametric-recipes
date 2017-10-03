import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DialogWrapper from './DialogWrapper';

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

function mapStateToProps({}) {
  return {};
}

function mapDispatchToProps(dispatch) {
  bindActionCreators({}, dispatch);
}

EditAuthDialog.propTypes = {};

EditAuthDialog.defaultProps = {};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(EditAuthDialog)
);
