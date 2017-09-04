import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles';
import {red} from 'material-ui/colors'
import { editTitle, editServingAmount, editServingUnit } from '../../actions';
import NumberInput from '../inputs/NumberInput';
import TextAreaInput from '../inputs/TextAreaInput';

const styles = {
	servingSection: {
		display: 'flex',
		margin:0,
		marginTop:12,
		alignItems:'baseline'
	},
	title:{
		margin:0
	},
	container:{
		padding:18,
		borderBottom:`4px double ${red[500]}`,
		marginBottom: 18
	}
};

function EditHeader(props) {
	const { servingSection, title, container } = props.classes;
	return (
		<div className={container}>
			<h1 className={title}>
				<TextAreaInput
				value={props.title}
				updateValue={props.editTitle}
				fontSize={40}
				fontWeight={600}
				/>
			</h1>
			<div className={servingSection}>
				<NumberInput
					amount={props.servingAmount}
					updateValue={props.editServingAmount}
					fontSize={30}
					fontWeight={400}
				/>
				<TextAreaInput
					updateValue={props.editServingUnit}
					value={props.servingUnit}
					fontSize={30}
					fontWeight={400}
					leftPadding={4}
				/>
			</div>
		</div>
	);
}

EditHeader.propTypes = {
	title: PropTypes.string,
	servingAmount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	servingUnit: PropTypes.string,
};

EditHeader.defaultProps = {
	title: 'A recipe',
	servingAmount: 1,
	servingUnit: 'serving',
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			editTitle,
			editServingUnit,
			editServingAmount,
		},
		dispatch,
	);
}

export default withStyles(styles)(
	connect(null, mapDispatchToProps)(EditHeader),
);
