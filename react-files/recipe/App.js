import React, { Component } from 'react';
import NumberInput from './components/NumberInput';

class App extends Component {
  render() {
    return (
      <div>
        <NumberInput fontSize={40} unit={'g'} />
      </div>
    );
  }
}

export default App;
