import React, { Component } from 'react';
import NumberInput from './components/NumberInput';
import RecipeContainer from './container/RecipeContainer';

class App extends Component {
	render() {
		return (
			<div>
				<RecipeContainer />
			</div>
		);
	}
}

export default App;
