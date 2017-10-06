import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import _ from 'lodash';

class ExpandWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    this.checkHeightAndUpdate();
    _.delay(this.checkHeightAndUpdate, 250);
  }

  componentDidUpdate() {
    this.checkHeightAndUpdate();
    _.delay(this.checkHeightAndUpdate, 250);
  }

  checkHeightAndUpdate() {
    const height = this.innerDiv.offsetHeight + this.props.paddingCompensation;
    if (height !== this.state.height) {
      this.setState({ height });
    }
  }

  innerDivRef = el => {
    this.innerDiv = el;
  };

  render() {
    return (
      <Motion
        style={{
          y: spring(this.state.height, {
            stiffness: this.props.stiffness,
            damping: this.props.damping,
          }),
        }}
      >
        {({ y }) => (
          <div
            style={{ height: `${y}px`, overflow: 'hidden' }}
            className={this.props.outerClass}
          >
            <div ref={this.innerDivRef} className={this.props.innerClass}>
              {this.props.children}
            </div>
          </div>
        )}
      </Motion>
    );
  }
}

ExpandWrapper.defaultProps = {
  paddingCompensation: 50,
  innerClass: '',
  outerClass: '',
  stiffness: 130,
  damping: 18,
};

export default ExpandWrapper;
