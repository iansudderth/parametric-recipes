import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import { lightBlue } from 'material-ui/colors';
import { changeRecipe, requestRecipe } from '../actions';

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
    textAlign: 'center',
  },
  innerDialog: {
    padding: 16,
  },
  buttonsContainer: {
    padding: 12,
    display: 'flex',
    justifyContent: 'space-between',
  },
};

function ChangeRecipeDialog(props) {
  function changeRecipeComposer(id) {
    return function() {
      props.requestRecipe(id);
      props.handleClose();
    };
  }

  const { listItem, listText, innerDialog, buttonsContainer } = props.classes;
  return (
    <Dialog open={props.open} onRequestClose={props.handleClose}>
      <div className={innerDialog}>
        <DialogTitle>Choose a Recipe </DialogTitle>
        <div>
          <List>
            {props.recipeList.current.map(recipe => (
              <ListItem
                key={recipe._id}
                className={listItem}
                onClick={changeRecipeComposer(recipe._id)}
              >
                <ListItemText className={listText} primary={recipe.title} />
              </ListItem>
            ))}
          </List>
          <div className={buttonsContainer}>
            <Button>{'Previous'}</Button>
            <Button>{'Next'}</Button>
          </div>
        </div>
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
      requestRecipe,
    },
    dispatch
  );
}

function mapStateToProps({ recipeList }) {
  return { recipeList };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(ChangeRecipeDialog)
);
