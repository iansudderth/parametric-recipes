import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Add from 'material-ui-icons/Add';
import EditIngredient from './EditIngredient';
import EditStep from './EditStep';
import {
	editStep,
	newStep,
	deleteStep,
	newIngredient,
	editIngredientName,
	editIngredientAmount,
	editIngredientUnit,
	deleteIngredient,
} from '../../actions';

const styles = {
	sectionContainer: {
		display: 'flex',
		borderBottom: `2px solid ${red[500]}`,
		fontSize: '20px',
		fontFamily: 'Roboto',
		'&:last-child': {
			border: 'none',
		},
		'@media(max-width: 768px)': {
			flexWrap: 'wrap',
			borderBottom: `3px solid ${red[500]}`,
			paddingTop: 12,
			paddingBottom: 12,
		},
	},
	ingredientSection: {
		width: '50%',
		'& ul': {
			paddingLeft: 12,
			margin: 0,
		},
		'@media(max-width: 768px)': {
			width: '100%',
			paddingRight: 12,
		},
	},
	stepsSection: {
		width: '50%',
		paddingRight: 12,
		paddingLeft: 12,
		'@media(max-width: 768px)': {
			width: '100%',
			borderTop: `2px solid ${red[100]}`,
		},
	},
	stepsContainer: {
		margin: 0,
		marginLeft: 18,
		paddingLeft: 12,
		paddingTop: 6,
	},
	newStepContainer: {
		display: 'flex',
		justifyContent: 'center',
		paddingBottom: 12,
		paddingTop: 12,
	},
	newIngredientContainer: {
		display: 'flex',
		justifyContent: 'center',
		paddingBottom: 12,
		paddingTop: 12,
	},
};

function EditSection(props) {
	const {
		sectionContainer,
		ingredientSection,
		stepsSection,
		stepsContainer,
		newStepContainer,
		newIngredientContainer,
	} = props.classes;

	function newStepDispatcher() {
		props.newStep(props.sectionIndex);
	}

	function deleteStepDispatcher(stepIndex) {
		props.deleteStep(props.sectionIndex, stepIndex);
	}

	function newIngredientDispatcher() {
		props.newIngredient(props.sectionIndex);
	}

	return (
		<div className={sectionContainer}>
			<div className={ingredientSection}>
				<ul>
					{props.ingredientsArray.map((ingredient, index) => (
						<EditIngredient
							key={`ingredient-${index}-${ingredient.name}`}
							ingredientName={ingredient.name}
							ingredientAmount={ingredient.amount}
							ingredientUnit={ingredient.unit}
							sectionIndex={props.sectionIndex}
							ingredientIndex={index}
						/>
					))}
				</ul>
				<div className={newIngredientContainer}>
					<Button
						raised
						color="primary"
						onClick={newIngredientDispatcher}
					>
						<Add />
						{'New Ingredient'}
					</Button>
				</div>
			</div>
			<div className={stepsSection}>
				<ol className={stepsContainer}>
					{props.steps.map((step, index) => (
						<EditStep
							key={`step-${index}-${step}`}
							stepText={step}
							sectionIndex={props.sectionIndex}
							stepIndex={index}
							editStep={props.editStep}
							deleteStep={deleteStepDispatcher}
						/>
					))}
				</ol>
				<div className={newStepContainer}>
					<Button
						raised
						color={'primary'}
						onClick={newStepDispatcher}
					>
						<Add />
						{'New Step'}
					</Button>
				</div>
			</div>
		</div>
	);
}

EditSection.propTypes = {
	sectionIndex: PropTypes.number,
	ingredientsArray: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			amount: PropTypes.number,
			unit: PropTypes.string,
			scaling: PropTypes.number,
		}),
	),
	steps: PropTypes.arrayOf(PropTypes.string),
	stepsStartingNumber: PropTypes.number,
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			editStep,
			newStep,
			deleteStep,
			newIngredient,
			editIngredientName,
			editIngredientAmount,
			editIngredientUnit,
			deleteIngredient,
		},
		dispatch,
	);
}

export default withStyles(styles)(
	connect(null, mapDispatchToProps)(EditSection),
);
