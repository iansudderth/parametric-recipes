import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import StepItem from './StepItem';

const styles = {
	container: {
		margin: 0,
		marginLeft: 18,
		paddingLeft: 12,
	},
};

function Steps(props) {
	const { container } = props.classes;

	return (
		<div>
			<ol start={props.startingNumber} className={container}>
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

export default withStyles(styles)(Steps);
