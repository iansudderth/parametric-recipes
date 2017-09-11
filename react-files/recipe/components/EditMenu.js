import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    return <div>{'I am the edit button'}</div>;
  }
}

EditMenu.propTypes = {};

EditMenu.defaultProps = {};

export default EditMenu;
