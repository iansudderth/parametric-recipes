import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import { lightBlue } from 'material-ui/colors';
import { changeRecipe } from '../actions';

const styles = {
	listItem: {
		transition: '.5s',
		cursor: 'pointer',
		'&:hover': {
			color: lightBlue[600],
		},
	},
	listText: {
		'& h3': {
			color: 'inherit',
		},
	},
};

function ChangeRecipeDialog(props) {
	function changeRecipeComposer(recipeName) {
		return function() {
			props.changeRecipe(recipeName);
			props.handleClose();
		};
	}

	const { listItem, listText } = props.classes;
	return (
		<Dialog open={props.open} onRequestClose={props.handleClose}>
			<DialogTitle>Choose a Recipe </DialogTitle>
			<div>
				<List>
					{props.recipeList.map(recipe =>
						(<ListItem
							key={recipe._id}
							className={listItem}
							onClick={changeRecipeComposer('potato salad')}
						>
							<ListItemText
								className={listText}
								primary={recipe.title}
							/>
						</ListItem>),
					)}
				</List>
			</div>
		</Dialog>
	);
}

ChangeRecipeDialog.propTypes = {
	open: PropTypes.bool,
	handleClose: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			changeRecipe,
		},
		dispatch,
	);
}

function mapStateToProps({ recipeList }) {
	return { recipeList };
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withStyles(styles)(ChangeRecipeDialog),
);
