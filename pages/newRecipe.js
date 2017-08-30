import React, { Component } from 'react';
import Recipe from '../react-files/recipe/index';
import withRoot from '../react-files/style/withRoot';

class RecipePage extends Component {
	static async getInitialProps({ query }) {
		return { query };
	}

	seedState = {};

	render() {
		return <Recipe seedState={this.seedState} editMode />;
	}
}

export default withRoot(RecipePage);
