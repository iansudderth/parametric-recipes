import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import injectSheet from 'react-jss';

const styles = {
  root: {
    display: 'inline-block',
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

class StyledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '22',
    };
  }

  changeHandler = event => {
    const oldVal = this.state.inputValue;
    let newVal = event.target.value;
    newVal = newVal.trim();
    newVal = newVal.length === 0 ? '0' : newVal;
    let inputValue = isNaN(newVal) ? oldVal : newVal;
    inputValue = removePrecedingZeros(inputValue);
    this.setState({ inputValue });
  };

  resizeStyle = () => {
    const fontSize = this.props.fontSize
      ? { fontSize: this.props.fontSize }
      : {};
    const fontFamily = this.props.fontFamily
      ? { fontFamily: this.props.fontFamily }
      : {};
    const charWidth = this.state.inputValue.toString().length;
    let oneCount = this.state.inputValue.match(/11/g);
    oneCount = oneCount ? oneCount.length + 1 : 0;
    let dotCount = this.state.inputValue.match(/\./g);
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

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.inputValue}
          style={this.resizeStyle()}
          className={classes.input}
          ref={this.inputRef}
        />
        <span
          className={classes.unit}
          style={this.unitStyle()}
          onClick={this.clickHandler}
        >
          {this.props.unit || 'g'}
        </span>
      </div>
    );
  }
}

StyledInput.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(StyledInput);
