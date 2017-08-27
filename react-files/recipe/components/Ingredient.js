import React from 'react';
import PropTypes from 'prop-types';

function Ingredient(props) {
	return (
		<div>
			{'stuff'}
		</div>
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
