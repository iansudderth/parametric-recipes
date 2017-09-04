import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import TextAreaInput from '../inputs/TextAreaInput';
import DeleteForever from 'material-ui-icons/DeleteForever';

const style = {
	container: {
		width: '100%',
		display: 'inline-flex',
		alignItems: 'center',
	},
};

function EditStep(props) {
	function updateStepValue(newText) {
		props.editStep(props.sectionIndex, props.stepIndex, newText);
	}

	function deleteStep() {
		props.deleteStep(props.stepIndex);
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
				<IconButton style={{ color: 'red' }} onClick={deleteStep}>
					<DeleteForever />
				</IconButton>
			</div>
		</li>
	);
}

EditStep.propTypes = {};

export default withStyles(style)(EditStep);
