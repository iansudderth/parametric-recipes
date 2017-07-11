import globalStyle from "./style/global-style.css"

import React, { Component } from 'react';
import TestComponent from './components/componentTemplate/'

class App extends Component {
  render() {
    return (
      <div>
      <TestComponent />
      </div>
    );
  }
}

export default App;
