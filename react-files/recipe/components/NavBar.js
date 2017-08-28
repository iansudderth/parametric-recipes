import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
	navBar: {
		backgroundColor: red[500],
	},
};

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dialogOpen: false,
		};
	}

	render() {
		const { navBar } = this.props.classes;
		return (
			<AppBar position={'static'} className={navBar}>
				<Toolbar>
					{'Hey'}
				</Toolbar>
			</AppBar>
		);
	}
}

export default withStyles(styles)(NavBar);
