import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui-icons';

const style = {
  dialogContainer: {
    padding: 12,
  },
  closeContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  contentContainer: {},
};

function DialogWrapper(props) {
  const { dialogContainer, closeContainer, contentContainer } = props.classes;
  return (
    <Dialog open={props.dialogIsOpen} onRequestClose={props.dialogCloseAction}>
      <div className={dialogContainer}>
        <div className={closeContainer}>
          <IconButton onClick={props.dialogCloseAction}>
            <Clear />
          </IconButton>
        </div>
        <div className={contentContainer}>{props.children}</div>
      </div>
    </Dialog>
  );
}

DialogWrapper.propTypes = {
  dialogIsOpen: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  dialogCloseAction: PropTypes.func.isRequired,
};

DialogWrapper.defaultProps = {
  dialogIsOpen: false,
};

export default withStyles(style)(DialogWrapper);
