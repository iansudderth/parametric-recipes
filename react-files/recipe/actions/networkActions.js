import axios from 'axios';
import { changeRecipe } from './recipeActions';

export const RECIPE_REQUEST_PROGRESS = 'RECIPE_REQUEST_PROGRESS';
function recipeRequestProgress() {
	return {
		type: RECIPE_REQUEST_PROGRESS,
	};
}

export const RECIPE_REQUEST_SUCCESS = 'RECIPE_REQUEST_SUCCESS';
function recipeRequestSuccess() {
	return {
		type: RECIPE_REQUEST_SUCCESS,
	};
}
export const RECIPE_REQUEST_ERROR = 'RECIPE_REQUEST_ERROR';
function recipeRequestError(error) {
	return {
		type: RECIPE_REQUEST_ERROR,
		payload: error,
	};
}

export function requestRecipe(id) {
	return function(dispatch) {
		dispatch(recipeRequestProgress());

		return axios.get(`/recipe/${id}`).then(
			response => {
				dispatch(recipeRequestSuccess());
				const newRecipe = response.data;
				dispatch(changeRecipe(newRecipe));
			},
			error => {
				console.log(error);
				dispatch(recipeRequestError(error));
			},
		);
	};
}

export const UPDATE_RECIPE_LIST_PROGRESS = 'UPDATE_RECIPE_LIST_PROGRESS';
function updateRecipeListProgress() {
	return {
		type: UPDATE_RECIPE_LIST_PROGRESS,
	};
}

export const UPDATE_RECIPE_LIST_SUCCESS = 'UPDATE_RECIPE_LIST_SUCCESS';
function updateRecipeListSuccess() {
	return {
		type: UPDATE_RECIPE_LIST_SUCCESS,
	};
}

export const UPDATE_RECIPE_LIST_ERROR = 'UPDATE_RECIPE_LIST_ERROR';
function updateRecipeListError(error) {
	return {
		type: UPDATE_RECIPE_LIST_ERROR,
		payload: error,
	};
}

export const UPDATE_RECIPE_LIST = 'UPDATE_RECIPE_LIST';
function updateRecipeList(list) {
	return {
		type: UPDATE_RECIPE_LIST,
		payload: list,
	};
}

export const REQUEST_UPDATE_RECIPE_LIST = 'REQUEST_UPDATE_RECIPE_LIST';
export function requestUpdateRecipeList() {
	return function(dispatch) {
		dispatch(updateRecipeListProgress());
		axios.get('/recipe/index').then(
			response => {
				dispatch(updateRecipeListSuccess());
				dispatch(updateRecipeList(response.data));
			},
			error => {
				dispatch(updateRecipeListError(error));
				console.log(error);
			},
		);
	};
}
