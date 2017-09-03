import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editTitle, editServingAmount, editServingUnit } from '../../actions';

function EditHeader(props) {
	function changeComposer(key) {
		return function() {
			props.changeHandler(key, props.servingAmount + 1);
		};
	}

	return (
		<div>
			<h1>
				{props.title}
			</h1>
			<h2>
				{props.servingAmount}
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
