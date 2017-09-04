import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextAreaInput from '../inputs/TextAreaInput';

const style = {
	container: {
		width: '100%',
		display: 'inline-flex',
	},
};

function EditStep(props) {
	function updateStepValue(newText) {
		props.editStep(props.sectionIndex, props.stepIndex, newText);
	}

	const { container } = props.classes;
	return (
		<li>
			<div className={container}>
				<TextAreaInput
					value={props.stepText}
					fontSize={20}
					fontWeight={400}
					updateValue={updateStepValue}
				/>
			</div>
		</li>
	);
}

EditStep.propTypes = {};

export default withStyles(style)(EditStep);
