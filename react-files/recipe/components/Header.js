import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';
import NumberInput from './NumberInput';

const styles = {
	headerContainer: {
		fontFamily: 'Roboto',
		padding: 18,
		borderBottom: `4px double ${red[500]}`,
		marginBottom: 18,
	},
	servingsContainer: {
		fontSize: 20,
		fontWeight: 300,
		margin: 0,
		paddingTop: 18,
		'& h2': {
			margin: 0,
			marginLeft: -12,
		},
	},
	title: {
		margin: 0,
		fontSize: 40,
	},
};

function Header(props) {
	const { headerContainer, servingsContainer, title } = props.classes;

	return (
		<div className={headerContainer}>
			<div>
				<h1 className={title}>
					{props.title}
				</h1>
			</div>
			<div className={servingsContainer}>
				<h2 style={{ fontWeight: 400 }}>
					<NumberInput
						amount={props.serving.amount}
						unit={props.serving.name}
						scalingFactor={props.scalingFactor}
						fontSize={30}
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
