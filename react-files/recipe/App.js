import React, { Component } from 'react';
import NumberInput from './components/NumberInput';
import RecipeContainer from './container/RecipeContainer';
import NavBar from './components/NavBar';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />

				<RecipeContainer />
			</div>
		);
	}
}

export default App;
