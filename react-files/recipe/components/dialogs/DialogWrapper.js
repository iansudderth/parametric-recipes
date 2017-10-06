import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui-icons/Clear';

import ExpandWrapper from '../helpers/ExpandWrapper';

const style = {
  dialogRoot: {
    width: '100%',
  },
  dialogContainer: {
    padding: 12,
    transition: '1s',
  },
  closeContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  contentContainer: {},
};

function DialogWrapper(props) {
  const {
    dialogContainer,
    closeContainer,
    contentContainer,
    innerWrapper,
    dialogRoot,
  } = props.classes;
  return (
    <Dialog
      open={props.dialogIsOpen}
      onRequestClose={props.dialogCloseAction}
      className={dialogRoot}
    >
      <div className={dialogContainer}>
        <div className={closeContainer}>
          <IconButton onClick={props.dialogCloseAction}>
            <Clear />
          </IconButton>
        </div>
        <ExpandWrapper innerClass={innerWrapper}>
          <div className={contentContainer}>{props.children}</div>
        </ExpandWrapper>
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
