import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

class SaveButtonAndDialog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
	}

	render() {
		return (
			<div>
				<Button color="primary" raised>
					Save & Publish
				</Button>
			</div>
		);
	}
}

SaveButtonAndDialog.propTypes = {};

SaveButtonAndDialog.defaultProps = {};

export default SaveButtonAndDialog;
