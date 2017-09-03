import React, { Component } from 'react';
import Recipe from '../react-files/recipe/index';
import withRoot from '../react-files/style/withRoot';

class RecipePage extends Component {
	static async getInitialProps({ query }) {
		return { query };
	}

	seedState = {
		editMode: true,
		recipe: {
			title: 'A new recipe',
			serving: {
				amount: 1,
				unit: 'serving',
			},

			recipe: [
				{
					ingredients: [
						{
							name: 'something',
							amount: 5,
							unit: 'g',
						},
						{
							name: 'something else',
							amount: 5,
							unit: 'g',
						},
						{
							name: 'another thing',
							amount: 5,
							unit: 'g',
						},
					],
					procedure: ['do a thing.', 'do another thing.', 'serve'],
				},
			],
		},
	};

	render() {
		return <Recipe seedState={this.seedState} editMode />;
	}
}

export default withRoot(RecipePage);
