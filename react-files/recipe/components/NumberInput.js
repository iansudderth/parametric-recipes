import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles';
import { changeScalingFactor } from '../actions/';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    paddingLeft: 12,
  },
  input: {
    fontFamily: 'Roboto',
    fontSize: 40,
    border: 'none',
    background: 'none',
    textAlign: 'center',
    '&:focus': {
      outline: 'none',
    },
  },
  unit: {
    fontFamily: 'Roboto',
    fontSize: 40,
  },
};

function removePrecedingZeros(str) {
  if (str.length <= 1) {
    return str;
  }
  const strArray = str.split('');
  while (strArray[0] === '0' && strArray[1] !== '.') {
    strArray.shift();
  }
  const output = strArray.join('');
  return output;
}

class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:
        this.props.amount === null ? null : this.props.amount.toString(),
      isBeingEdited: false,
    };
  }

  changeHandler = event => {
    const oldVal = this.state.inputValue;
    let newVal = event.target.value;
    newVal = newVal.trim();
    newVal = newVal.length === 0 ? '0' : newVal;
    let inputValue = isNaN(newVal) ? oldVal : newVal;
    inputValue = removePrecedingZeros(inputValue);
    inputValue = inputValue === '' ? '0' : inputValue;
    const updatedScalingFactor = parseFloat(inputValue) / this.props.amount;
    this.setState({ inputValue });
    this.props.changeScalingFactor(updatedScalingFactor);
  };

  resizeStyle = () => {
    const fontSize = this.props.fontSize
      ? { fontSize: this.props.fontSize }
      : {};
    const fontFamily = this.props.fontFamily
      ? { fontFamily: this.props.fontFamily }
      : {};
    const outputValue = this.outputValue().toString();
    const charWidth = outputValue.length;
    let oneCount = outputValue.match(/11/g);
    oneCount = oneCount ? oneCount.length + 1 : 0;
    let dotCount = outputValue.match(/\./g);
    dotCount = dotCount ? 1 : 0;

    const inputWidth =
      charWidth - oneCount - dotCount + oneCount * 1 + dotCount * 0.5;

    const widthStyle = { width: `calc(${inputWidth}ch + 2px)` };

    return Object.assign(widthStyle, fontSize, fontFamily);
  };

  unitStyle = () => {
    const fontSize = this.props.fontSize
      ? { fontSize: this.props.fontSize }
      : {};
    const fontFamily = this.props.fontFamily
      ? { fontFamily: this.props.fontFamily }
      : {};

    return Object.assign(fontSize, fontFamily);
  };

  inputRef = el => {
    this.input = el;
  };

  clickHandler = () => {
    const length = this.state.inputValue.length;
    this.input.focus();
    this.input.setSelectionRange(length, length);
  };

  generateValue = () => {
    if (this.props.amount === null) {
      return '';
    }
    const newVal = this.props.amount * this.props.scalingFactor;
    return _.round(newVal, 2);
  };

  focusHandler = () => {
    const newVal = this.generateValue();
    this.setState({ isBeingEdited: true, inputValue: newVal });
  };

  blurHandler = () => {
    const newVal = this.generateValue();
    this.setState({ isBeingEdited: false, inputValue: newVal });
  };

  outputValue = () => {
    if (this.state.isBeingEdited) {
      return this.state.inputValue;
    }
    return this.generateValue();
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        {this.props.amount === null
          ? ''
          : <input
              type="text"
              onChange={this.changeHandler}
              onFocus={this.focusHandler}
              onBlur={this.blurHandler}
              value={this.outputValue()}
              style={this.resizeStyle()}
              className={classes.input}
              ref={this.inputRef}
          />}
        <span
          className={classes.unit}
          style={this.unitStyle()}
          onClick={this.clickHandler}
        >
          {this.props.unit}
        </span>
      </div>
    );
  }
}

NumberInput.propTypes = {
  classes: PropTypes.object,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  unit: PropTypes.string,
  scalingFactor: PropTypes.number,
};

NumberInput.defaultProps = {
  classes: {},
  fontSize: 20,
  fontFamily: 'Roboto',
  amount: null,
  unit: 'g',
  scalingFactor: 1,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeScalingFactor,
    },
    dispatch,
  );
}

export default withStyles(styles)(
  connect(null, mapDispatchToProps)(NumberInput),
);
