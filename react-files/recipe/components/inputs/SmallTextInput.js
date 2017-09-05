import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AutosizeInput from '../inputs/AutosizeInput';

const styles = {
  root: {
    display: 'inline',
    fontFamily: 'Roboto',
    fontSize: 40,
    '&:focus': {
      outline: 'none',
    },
  },
};
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

  inputStyles = () => {
    const fontSize = { fontSize: this.props.fontSize };
    const fontFamily = { fontFamily: this.props.fontFamily };
    const leftSpacing = { marginLeft: this.props.leftSpacing };

    return Object.assign(fontSize, fontFamily, leftSpacing);
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <AutosizeInput
          className={classes.input}
          value={this.state.inputValue}
          onChange={this.changeHandler}
          onBlur={this.blurHandler}
          onKeyPress={this.keyHandler}
          ref={this.inputRef}
          style={this.inputStyles()}
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
  leftSpacing: PropTypes.number,
};

SmallTextInput.defaultProps = {
  classes: {},
  fontSize: 20,
  fontFamily: 'Roboto',
  leftSpacing: 0,
  amount: '',
  scalingFactor: 1,
  characterCap: 20,
  updateScalingFactor: x => null,
  updateValue: x => null,
  inputRef: x => null,
};

export default withStyles(styles)(SmallTextInput);
