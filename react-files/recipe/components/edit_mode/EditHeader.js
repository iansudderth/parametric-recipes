import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles';
import { editTitle, editServingAmount, editServingUnit } from '../../actions';
import NumberInput from '../inputs/NumberInput';
import TextAreaInput from '../inputs/TextAreaInput';

const styles = {
	servingSection: {
		display: 'flex',
	},
};

function EditHeader(props) {
	const { servingSection } = props.classes;
	return (
		<div>
			<h1>
				<TextAreaInput
				value={props.title}
				updateValue={props.editTitle}
				/>
			</h1>
			<div className={servingSection}>
				<NumberInput
					amount={props.servingAmount}
					updateValue={props.editServingAmount}
				/>
				<TextAreaInput
					updateValue={props.editServingUnit}
					value={props.servingUnit}
				/>
			</div>
		</div>
	);
}

EditHeader.propTypes = {
	title: PropTypes.string,
	servingAmount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	servingUnit: PropTypes.string,
};

EditHeader.defaultProps = {
	title: 'A recipe',
	servingAmount: 1,
	servingUnit: 'serving',
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			editTitle,
			editServingUnit,
			editServingAmount,
		},
		dispatch,
	);
}

export default withStyles(styles)(
	connect(null, mapDispatchToProps)(EditHeader),
);
