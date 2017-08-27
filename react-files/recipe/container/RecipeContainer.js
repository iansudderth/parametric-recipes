import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function RecipeContainer(props) {
	return (
		<div>
			<div>
				<Header />
			</div>
			<div>
				{props.recipe.recipe.map(section =>
					(<Section
						steps={section.procedure}
						ingredientsArray={section.ingredients}
						scalingFactor={props.scalingFactor}
					/>),
				)}
			</div>
		</div>
	);
}

RecipeContainer.propTypes = {
	scalingFactor: PropTypes.number,
	recipe: PropTypes.shape({
		title: PropTypes.string,
		serving: PropTypes.shape({
			amount: PropTypes.number,
			name: PropTypes.string,
		}),
		recipe: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				amount: PropTypes.number,
				unit: PropTypes.string,
				scaling: PropTypes.number,
			}),
		),
	}),
};

RecipeContainer.defaultProps = {
	scalingFactor: 1,
	recipe: {
		title: 'Placeholder Recipe Title',
		serving: {
			amount: 0,
			name: '',
		},
		recipe: [],
	},
};

export default RecipeContainer;
