import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextAreaInput from '../inputs/TextAreaInput';
import NumberInput from '../inputs/NumberInput';
import SmallTextAreaInput from '../inputs/SmallTextAreaInput';

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
	amountContainer: {
		display: 'flex',
		fexWrap: 'nowrap',
	},
	nameContainer: {
		flexGrow: 1,
		display: 'flex',
	},
	unitContainer: {
		display: 'inline-flex',
	},
	numberContainer: {
		display: 'flex',
		flexGrow: 1,
	},
};

function EditIngredient(props) {
	const {
		container,
		amountContainer,
		nameContainer,
		unitContainer,
		numberContainer,
	} = props.classes;
	return (
		<div className={container}>
			<div className={nameContainer}>
				<TextAreaInput value={props.ingredientName} fontWeight={400} />
			</div>
			<div className={amountContainer}>
				<div className={numberContainer}>
					<NumberInput amount={props.ingredientAmount} />
				</div>
				<div className={unitContainer}>
					<SmallTextAreaInput
						value={props.ingredientUnit}
						fontWeight={400}
					/>
				</div>
			</div>
		</div>
	);
}

EditIngredient.propTypes = {
	index: PropTypes.number,
};

export default withStyles(styles)(EditIngredient);
