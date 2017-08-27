import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from './NumberInput';

function Ingredient(props) {
	let { name, amount, unit, scaling } = props.ingredient;
	name = name || '';
	amount = amount || '';
	unit = unit || '';
	scaling = scaling ? `${scaling}%` : '';
	return (
		<li>
			{`${name}  `}
			<NumberInput amount={amount} unit={unit} />
		</li>
	);
}

Ingredient.propTypes = {
	scalingFactor: PropTypes.number,
	ingredient: PropTypes.shape({
		name: PropTypes.string,
		amount: PropTypes.number,
		unit: PropTypes.string,
		scaling: PropTypes.number,
	}),
};

Ingredient.defaultProps = {
	scalingFactor: 1,
	ingredient: {
		name: 'ingredient',
		amount: 0,
		unit: '',
		scaling: 0,
	},
};

export default Ingredient;
