import React from 'react';
import PropTypes from 'prop-types';

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
			<button onClick={changeComposer('amount')}>Click Me</button>
		</div>
	);
}

EditHeader.propTypes = {
	title: PropTypes.string,
	servingAmount: PropTypes.number,
	servingUnit: PropTypes.string,
	changeHandler: PropTypes.func,
};

EditHeader.defaultProps = {
	title: 'A recipe',
	servingAmount: 1,
	servingUnit: 'serving',
	changeHandler: () => null,
};

export default EditHeader;
