import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import EditHeader from '../components/edit_mode/EditHeader';
import EditSection from '../components/edit_mode/EditSection'

const styles = {
	container:{
		margin:12
	}
}

class RecipeEditorContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const {container} = this.props.classes
		return (
			<div className={container}>
				<Card>
				<EditHeader
					title={this.props.recipe.title}
					servingAmount={this.props.recipe.serving.amount}
					servingUnit={this.props.recipe.serving.unit}
				/>
				{this.props.recipe.recipe.map( (section,index) => {
					return(
					<EditSection
					key={`recipe-section-${index}`}
					sectionIndex={index}
					ingredientsArray={section.ingredients}
					steps={section.procedure}
					/>
					)
				})}
				</Card>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(
	RecipeEditorContainer,
));
