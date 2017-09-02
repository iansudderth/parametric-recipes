import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditHeader from '../components/edit_mode/EditHeader';

class RecipeEditorContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipe: {
				title: 'My new recipe',
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
						procedure: [
							'do a thing.',
							'do another thing.',
							'serve',
						],
					},
				],
			},
		};
	}

	headerEditHandler = (key, newValue) => {
		switch (key) {
			case 'amount':
				this.setState(prevState => {
					prevState.recipe.serving.amount = newValue;
					return prevState;
				});
				break;
			case 'unit':
				this.setState(prevState => {
					prevState;
				});
		}
	};

	render() {
		return (
			<div>
				<EditHeader
					title={this.state.recipe.title}
					servingAmount={this.state.recipe.serving.amount}
					servingUnit={this.state.recipe.serving.unit}
					changeHandler={this.headerEditHandler}
				/>
			</div>
		);
	}
}

RecipeEditorContainer.propTypes = {};

export default RecipeEditorContainer;
