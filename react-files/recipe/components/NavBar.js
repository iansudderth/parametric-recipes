import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestUpdateRecipeList } from '../actions';
import { withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ChangeRecipeDialog from './ChangeRecipeDialog';

const styles = {
	navBar: {
		backgroundColor: red[500],
	},
	toolBar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	navText: {
		color: 'white',
	},
	changeRecipeButton: {
		color: 'white',
	},
};

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dialogOpen: false,
		};
	}

	openRecipeDialog = () => {
		this.props.requestUpdateRecipeList();
		this.setState({ dialogOpen: true });
	};

	closeRecipeDialog = () => {
		this.setState({ dialogOpen: false });
	};

	render() {
		const {
			navBar,
			navText,
			toolBar,
			changeRecipeButton,
		} = this.props.classes;
		return (
			<AppBar position={'static'} className={navBar}>
				<Toolbar className={toolBar}>
					<Typography type={'title'} className={navText}>
						{'Parametric Recipes'}
					</Typography>
					<Button
						className={changeRecipeButton}
						onClick={this.openRecipeDialog}
					>
						{'Change Recipe'}
					</Button>
				</Toolbar>
				<ChangeRecipeDialog
					open={this.state.dialogOpen}
					handleClose={this.closeRecipeDialog}
				/>
			</AppBar>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ requestUpdateRecipeList }, dispatch);
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(NavBar));
