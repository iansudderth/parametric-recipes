import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient';
import Steps from './Steps';

function Section(props) {
	return (
		<div>
			<div>
				{props.ingredientsArray.map(ingredient =>
					(<Ingredient
						scalingFactor={props.scalingFactor}
						ingredient={ingredient}
					/>),
				)}
			</div>
			<div>
				<Steps steps={props.steps} />
			</div>
		</div>
	);
}

Section.propTypes = {
	ingredientsArray: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			amount: PropTypes.number,
			unit: PropTypes.string,
			scaling: PropTypes.number,
		}),
	),
	scalingFactor: PropTypes.number,
	steps: PropTypes.arrayOf(PropTypes.string),
};

Section.defaultProps = {
	ingredientsArray: [],
	scalingFactor: 1,
	steps: [],
};

export default Section;
