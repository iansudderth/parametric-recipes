import React from 'react';
import Recipe from '../react-files/recipe/index';
import withRoot from '../react-files/style/withRoot';

function RecipePage(props) {
  return <Recipe />;
}

export default withRoot(RecipePage);
