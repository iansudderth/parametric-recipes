import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import CheckCircle from 'material-ui-icons/CheckCircle';

const styles = {
  iconContainer: {},
  contentContainer: {},
};

function SuccessWrapper(props) {
  const { iconContainer, contentContainer } = props.classes;
  return (
    <div>
      <div className={iconContainer}>
        <CheckCircle />
      </div>
      <div className={contentContainer}>{props.children}</div>
    </div>
  );
}

SuccessWrapper.propTypes = {};

SuccessWrapper.defaultProps = {};

export default withStyles(styles)(SuccessWrapper);
