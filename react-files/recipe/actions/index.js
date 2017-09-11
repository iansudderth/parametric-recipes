import axios from 'axios';

import {
  CHANGE_RECIPE,
  changeRecipe,
  CHANGE_SCALING_FACTOR,
  changeScalingFactor,
  NEW_RECIPE,
  newRecipe,
  EDIT_RECIPE,
  editRecipe,
} from './recipeActions';

export {
  CHANGE_RECIPE,
  changeRecipe,
  CHANGE_SCALING_FACTOR,
  changeScalingFactor,
  NEW_RECIPE,
  newRecipe,
  EDIT_RECIPE,
  editRecipe,
};

import {
  RECIPE_REQUEST_PROGRESS,
  RECIPE_REQUEST_SUCCESS,
  RECIPE_REQUEST_ERROR,
  requestRecipe,
  UPDATE_RECIPE_LIST_PROGRESS,
  UPDATE_RECIPE_LIST_SUCCESS,
  UPDATE_RECIPE_LIST_ERROR,
  UPDATE_RECIPE_LIST,
  REQUEST_UPDATE_RECIPE_LIST,
  requestUpdateRecipeList,
  PUBLISH_RECIPE,
  PUBLISH_RECIPE_ERROR,
  PUBLISH_RECIPE_PROGRESS,
  PUBLISH_RECIPE_SUCCESS,
  publishRecipe,
} from './networkActions';

export {
  RECIPE_REQUEST_PROGRESS,
  RECIPE_REQUEST_SUCCESS,
  RECIPE_REQUEST_ERROR,
  requestRecipe,
  UPDATE_RECIPE_LIST_PROGRESS,
  UPDATE_RECIPE_LIST_SUCCESS,
  UPDATE_RECIPE_LIST_ERROR,
  UPDATE_RECIPE_LIST,
  REQUEST_UPDATE_RECIPE_LIST,
  requestUpdateRecipeList,
  PUBLISH_RECIPE,
  PUBLISH_RECIPE_ERROR,
  PUBLISH_RECIPE_PROGRESS,
  PUBLISH_RECIPE_SUCCESS,
  publishRecipe,
};

import {
  EDIT_TITLE,
  editTitle,
  EDIT_SERVING_AMOUNT,
  editServingAmount,
  EDIT_SERVING_UNIT,
  editServingUnit,
} from './editHeaderActions';

export {
  EDIT_TITLE,
  editTitle,
  EDIT_SERVING_AMOUNT,
  editServingAmount,
  EDIT_SERVING_UNIT,
  editServingUnit,
};

import {
  NEW_SECTION,
  newSection,
  DELETE_SECTION,
  deleteSection,
  REORDER_SECTION,
  reorderSection,
} from './editSectionActions';

export {
  NEW_SECTION,
  newSection,
  DELETE_SECTION,
  deleteSection,
  REORDER_SECTION,
  reorderSection,
};

import {
  NEW_INGREDIENT,
  newIngredient,
  EDIT_INGREDIENT_NAME,
  editIngredientName,
  EDIT_INGREDIENT_AMOUNT,
  editIngredientAmount,
  EDIT_INGREDIENT_UNIT,
  editIngredientUnit,
  REORDER_INGREDIENT,
  reorderIngredient,
  DELETE_INGREDIENT,
  deleteIngredient,
} from './editIngredientAction';

export {
  NEW_INGREDIENT,
  newIngredient,
  EDIT_INGREDIENT_NAME,
  editIngredientName,
  EDIT_INGREDIENT_AMOUNT,
  editIngredientAmount,
  EDIT_INGREDIENT_UNIT,
  editIngredientUnit,
  REORDER_INGREDIENT,
  reorderIngredient,
  DELETE_INGREDIENT,
  deleteIngredient,
};

import {
  NEW_STEP,
  newStep,
  EDIT_STEP,
  editStep,
  DELETE_STEP,
  deleteStep,
  REORDER_STEP,
  reorderStep,
} from './editStepActions';

export {
  NEW_STEP,
  newStep,
  EDIT_STEP,
  editStep,
  DELETE_STEP,
  deleteStep,
  REORDER_STEP,
  reorderStep,
};

export const RESET = 'RESET';
export function reset() {
  return {
    type: RESET,
  };
}
