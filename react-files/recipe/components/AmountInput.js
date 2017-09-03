import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NumberInput from './inputs/NumberInput';
import { changeScalingFactor } from '../actions';

function AmountInput(props) {
  function updateScalingFactor(newScalingFactor) {
    props.changeScalingFactor(newScalingFactor);
  }
  return (
    <NumberInput
      amount={props.amount}
      unit={props.unit}
      scalingFactor={props.scalingFactor}
      updateScalingFactor={updateScalingFactor}
      fontSize={props.fontSize}
    />
  );
}

AmountInput.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  unit: PropTypes.string,
  scalingFactor: PropTypes.number,
  changeScalingFactor: PropTypes.func,
  fontSize: PropTypes.number,
};

AmountInput.defaultProps = {
  amount: 0,
  unit: 'g',
  scalingFactor: 1,
  fontSize: 20,
  changeScalingFactor: x => null,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeScalingFactor,
    },
    dispatch,
  );
}

export default connect(null, mapDispatchToProps)(AmountInput);
