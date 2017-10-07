import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'material-ui/Button';
import Add from 'material-ui-icons/Add';
import { newSection } from '../actions';
import EditHeader from '../components/edit_mode/EditHeader';
import EditSection from '../components/edit_mode/EditSection';

const styles = {
  container: {
    margin: 12,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 12,
  },
};

class RecipeEditorContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  generateSections = () => {
    let stepStartingNumber = 1;
    return this.props.recipe.recipe.map((section, index) => {
      let currentStep = stepStartingNumber;
      stepStartingNumber += section.procedure.length;
      return (
        <EditSection
          key={`recipe-section-${section.key}`}
          sectionIndex={index}
          ingredientsArray={section.ingredients}
          steps={section.procedure}
          startStepAt={currentStep}
        />
      );
    });
  };

  render() {
    const { container, buttonContainer } = this.props.classes;
    return (
      <div className={container}>
        <Card>
          <EditHeader />
          {this.generateSections()}
          <div className={buttonContainer}>
            <Button raised color="primary" onClick={this.props.newSection}>
              <Add />
              {'New Section'}
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

RecipeEditorContainer.propTypes = {};

function mapStateToProps({ recipe }) {
  return {
    recipe,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newSection }, dispatch);
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(RecipeEditorContainer)
);
