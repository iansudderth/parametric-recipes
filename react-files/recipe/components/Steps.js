import React from 'react';
import PropTypes from 'prop-types';
import StepItem from './StepItem';

function Steps(props) {
	return (
		<div>
			<ol start={props.startingNumber}>
				{props.steps.map(step =>
					<StepItem key={`step${step}`} step={step} />,
				)}
			</ol>
		</div>
	);
}

Steps.propTypes = {
	steps: PropTypes.arrayOf(PropTypes.string),
	startingNumber: PropTypes.number,
};

Steps.defaultProps = {
	steps: [],
	startingNumber: 1,
};

export default Steps;
