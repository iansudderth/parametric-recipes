import React from 'react';
import PropTypes from 'prop-types';
import StepItem from './StepItem';

function Steps(props) {
	return (
		<div>
			<ul>
				{props.steps.map(step => <StepItem step={step} />)}
			</ul>
		</div>
	);
}

Steps.propTypes = {
	steps: PropTypes.arrayOf(PropTypes.string),
};

Steps.defaultProps = {
	steps: [],
};

export default Steps;
