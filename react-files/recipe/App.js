import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeContainer from './container/RecipeContainer';
import RecipeEditorContainer from './container/RecipeEditorContainer';
import NavBar from './components/NavBar';
import SaveDialog from './components/dialogs/SaveDialog';
import EditAuthDialog from './components/dialogs/EditAuthDialog';
import DiscardChangesDialog from './components/dialogs/DiscardChangesDialog';

function App(props) {
  return (
    <div>
      <NavBar />
      {props.editMode ? <RecipeEditorContainer /> : <RecipeContainer />}
      <SaveDialog />
      <EditAuthDialog />
      <DiscardChangesDialog />
    </div>
  );
}

function mapStateToProps({ editMode }) {
  return { editMode };
}

export default connect(mapStateToProps)(App);
