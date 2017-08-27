import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Ingredient from './Ingredient';
import Steps from './Steps';

const styles = {
	sectionContainer: {
		display: 'flex',
		borderBottom: '2px solid black',
	},
	ingredientSection: {
		width: '50%',
	},
	stepsSection: {
		width: '50%',
	},
};

function Section(props) {
	const { sectionContainer, ingredientSection, stepsSection } = props.classes;
	return (
		<div className={sectionContainer}>
			<div className={stepsSection}>
				{props.ingredientsArray.map(ingredient =>
					(<Ingredient
						key={`ingredient-${ingredient.name}-${ingredient.amount}`}
						scalingFactor={props.scalingFactor}
						ingredient={ingredient}
					/>),
				)}
			</div>
			<div className={ingredientSection}>
				<Steps
					steps={props.steps}
					startingNumber={props.stepsStartingNumber}
				/>
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
	stepsStartingNumber: PropTypes.number,
};

Section.defaultProps = {
	ingredientsArray: [],
	scalingFactor: 1,
	steps: [],
	stepsStartingNumber: 1,
};

export default withStyles(styles)(Section);
