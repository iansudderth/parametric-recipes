import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ContentEditable from 'react-contenteditable';

const styles = {
  root: {
    display: 'inline',
    fontFamily: 'Roboto',
    fontSize: 40,
    '&:focus': {
      outline: 'none',
    },
  },
  input: {
    fontFamily: 'Roboto',
    fontSize: 40,
    textAlign: 'center',
    '&:focus': {
      outline: 'none',
    },
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

class SmallTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '00',
    };
  }

  changeHandler = event => {
    const newVal = event.target.value;
    this.setState({ inputValue: newVal });
  };

  focusHandler = () => {};

  blurHandler = () => {
    let value = this.state.inputValue;
    value = value.replace(/&nbsp;/g, ' ');
    value = value.trim();
    value = value.replace(/\n\r\t/g, '');
    if (this.props.characterCap !== 0) {
      if (value.length >= this.props.characterCap) {
        value = value.slice(0, this.props.characterCap);
      }
    }
    this.setState({ inputValue: value });
  };

  keyHandler = event => {
    if (event.which === 13) {
      this.input.htmlEl.blur();
    }
  };

  inputRef = el => {
    this.input = el;
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <ContentEditable
          html={this.state.inputValue}
          onChange={this.changeHandler}
          disabled={false}
          style={{ display: 'inline', outline: 'none' }}
          onBlur={this.blurHandler}
          onKeyPress={this.keyHandler}
          ref={this.inputRef}
        />
      </div>
    );
  }
}

SmallTextInput.propTypes = {
  classes: PropTypes.object,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  scalingFactor: PropTypes.number,
  updateScalingFactor: PropTypes.func,
  updateValue: PropTypes.func,
  inputRef: PropTypes.func,
  characterCap: PropTypes.number,
};

SmallTextInput.defaultProps = {
  classes: {},
  fontSize: 20,
  fontFamily: 'Roboto',
  amount: null,
  scalingFactor: 1,
  characterCap: 20,
  updateScalingFactor: x => null,
  updateValue: x => null,
  inputRef: x => null,
};

export default withStyles(styles)(SmallTextInput);
