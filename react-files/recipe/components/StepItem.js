import React from 'react';
import PropTypes from 'prop-types';

function StepItem(props) {
	return (
		<li>
			{props.step}
		</li>
	);
}

StepItem.propTypes = {
	step: PropTypes.string,
};

StepItem.defaultProps = {
	step: 'Do this thing with these ingredients',
};

export default StepItem;
