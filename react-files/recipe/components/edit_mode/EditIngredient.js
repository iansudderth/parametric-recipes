import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles'

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 12,
		paddingBottom: 12,
		borderBottom: '2px solid #F0F0F0',
		'&:last-child': {
			borderBottom: 'none',
		},
	},
	amountContainer:{
		display:'flex',
		fexWrap:'nowrap'
	}

};

function EditIngredient(props) {
	const {container, amountContainer} = props.classes
	return (
		<div className={container}>
			<div>{props.ingredientName}</div>
			<div className={amountContainer}>
				<div>{props.ingredientAmount}</div>
				<div>{props.ingredientUnit}</div>
			</div>
		</div>
		);
}

EditIngredient.propTypes = {
	index: PropTypes.number,
};

export default withStyles(styles)(EditIngredient);
