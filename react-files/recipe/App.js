import React, { Component } from 'react';
import RecipeContainer from './container/RecipeContainer';
import RecipeEditorContainer from './container/RecipeEditorContainer';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';

function App(props) {
	return (
		<div>
			<NavBar />
			{props.editMode ? <RecipeEditorContainer /> : <RecipeContainer />}
		</div>
	);
}

function mapStateToProps({ editMode }) {
	return { editMode };
}

export default connect(mapStateToProps)(App);
