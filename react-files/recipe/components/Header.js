import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import NumberInput from './NumberInput';

const styles = {
	headerContainer: {
		fontFamily: 'Roboto',
	},
	servingsContainer: {
		fontSize: 20,
		fontWeight: 300,
	},
};

function Header(props) {
	const { headerContainer, servingsContainer } = props.classes;

	return (
		<div className={headerContainer}>
			<div>
				<h1>
					{props.title}
				</h1>
			</div>
			<div className={servingsContainer}>
				<h2 style={{ fontWeight: 400 }}>
					<NumberInput
						amount={props.serving.amount}
						unit={props.serving.name}
						scalingFactor={props.scalingFactor}
					/>
				</h2>
			</div>
		</div>
	);
}

Header.propTypes = {
	scalingFactor: PropTypes.number,
	title: PropTypes.string,
	serving: PropTypes.shape({
		amount: PropTypes.number,
		name: PropTypes.string,
	}),
};

Header.defaultProps = {
	scalingFactor: 1,
	title: 'Recipe',
	serving: {
		amount: 1,
		name: 'serving',
	},
};

export default withStyles(styles)(Header);
