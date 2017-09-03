import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editTitle, editServingAmount, editServingUnit } from '../../actions';
import NumberInput from '../inputs/NumberInput';

function EditHeader(props) {
	return (
		<div>
			<h1>
				{props.title}
			</h1>
			<h2>
				<NumberInput
					amount={props.servingAmount}
					updateValue={props.editServingAmount}
				/>
				{props.servingUnit}
			</h2>
		</div>
	);
}

EditHeader.propTypes = {
	title: PropTypes.string,
	servingAmount: PropTypes.number,
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

export default connect(null, mapDispatchToProps)(EditHeader);
