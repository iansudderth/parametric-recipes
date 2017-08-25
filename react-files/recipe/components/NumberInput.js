import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

const shadowStyle = {
  fontSize: 40,
  fontFamily: 'sans-serif',
  display: 'inline-block',
};


class StyledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '22',
    };
  }

 changeHandler = (event) => {
   const oldVal = this.state.inputValue;
   let newVal = event.target.value;
   newVal = newVal.trim();
   newVal = newVal.length === 0 ? '0' : newVal;
   if (isNaN(newVal)) {
     this.setState({ inputValue: oldVal });
   } else {
     this.setState({ inputValue: newVal });
   }
 }

 inputRef = (el) => {
   this.input = el;
 }


  style = () => {
    const charWidth = this.state.inputValue.toString().length;
    let oneCount = this.state.inputValue.match(/11/g);
    oneCount = oneCount ? oneCount.length : 0;
    console.log(oneCount);
    let dotCount = this.state.inputValue.match(/\./g);
    dotCount = dotCount ? 1 : 0;

    const inputWidth = (charWidth - oneCount - dotCount) + (oneCount * 0.75) + (dotCount * 0.8);

    return { width: `calc(${inputWidth}ch + 2px)`, fontSize: 40, textAlign: 'left', padding: 0, fontFamily: 'sans-serif' };
  }

  render() {
    const classes = this.props.classes;
    return (
      <div>
        <h3>{this.state.inputValue}</h3>
        <div style={shadowStyle}>
          {this.state.inputValue}
        </div>
        <br />
        <input
          type="text"
          ref={this.inputRef}
          onChange={this.changeHandler}
          value={this.state.inputValue}
          style={this.style()}
        />
      </div>
    );
  }
}

export default StyledInput;
