import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextareaAutosize from 'react-autosize-textarea';

const styles = {
	area: {
		resize: 'none',
		fontFamily: 'Roboto',
		fontSize: 20,
		width: '100%',
		border: 'none',
		padding:0,
		background: 'none',
		'&:focus': {
			outline: 'none',
		},
	},
	container: {
		flexGrow: 1,
	},
};

class TextAreaInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value,
		};
	}

	changeHandler = event => {
		let newValue = event.target.value
		newValue = newValue.replace(/[\t\n\r]/g , '');
		newValue = newValue.replace(/^\s*/gm,'');
		this.setState({ value: newValue });
	};

	inputStyles = () => {
		const fontSize = { fontSize: this.props.fontSize };
		const fontWeight = {fontWeight: this.props.fontWeight}

		return Object.assign({}, fontSize, fontWeight);
	};

	updateValue = () => {
		this.props.updateValue(this.state.value);
	};

	render() {
		const { area, container } = this.props.classes;
		return (
			<div className={container}>
				<TextareaAutosize
					onChange={this.changeHandler}
					className={area}
					style={this.inputStyles()}
					onBlur={this.updateValue}
					value={this.state.value}
				/>
			</div>
		);
	}
}

TextAreaInput.propTypes = {
	value: PropTypes.string,
	fontSize: PropTypes.number,
	classes: PropTypes.shape({
		area: PropTypes.string,
		container: PropTypes.string,
	}),
	updateValue: PropTypes.func,
	fontWeight : PropTypes.number
};

TextAreaInput.defaultProps = {
	value: '',
	fontSize: 20,
	fontWeight : 300,
	classes: {
		area: '',
		container: '',
	},
	updateValue: x => null,
};

export default withStyles(styles)(TextAreaInput);
