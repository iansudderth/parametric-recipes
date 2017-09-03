import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditHeader from '../components/edit_mode/EditHeader';

class RecipeEditorContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<EditHeader
					title={this.props.recipe.title}
					servingAmount={this.props.recipe.serving.amount}
					servingUnit={this.props.recipe.serving.unit}
				/>
			</div>
		);
	}
}

RecipeEditorContainer.propTypes = {};

function mapStateToProps({ recipe }) {
	return {
		recipe,
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(
	RecipeEditorContainer,
);
