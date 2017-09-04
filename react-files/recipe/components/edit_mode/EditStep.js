import React from 'react';
import PropTypes from 'prop-types';

function EditStep(props) {
	return (
		<li>
			{props.stepText}
		</li>
		);
}

EditStep.propTypes = {};

export default EditStep;
