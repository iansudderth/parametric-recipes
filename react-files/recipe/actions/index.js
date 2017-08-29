import axios from 'axios';

// ===============
// Action Creators
// ===============

export const CHANGE_RECIPE = 'CHANGE_RECIPE';
export function changeRecipe(recipe) {
	return {
		type: CHANGE_RECIPE,
		payload: recipe,
	};
}

export const CHANGE_SCALING_FACTOR = 'CHANGE_SCALING_FACTOR';
export function changeScalingFactor(newScalingFactor) {
	return {
		type: CHANGE_SCALING_FACTOR,
		payload: newScalingFactor,
	};
}

export const RECIPE_REQUEST_PROGRESS = 'RECIPE_REQUEST_PROGRESS';
export function networkProgress() {
	return {
		type: RECIPE_REQUEST_PROGRESS,
	};
}

export const RECIPE_REQUEST_SUCCESS = 'RECIPE_REQUEST_SUCCESS';
export function networkSuccess() {
	return {
		type: RECIPE_REQUEST_SUCCESS,
	};
}
export const RECIPE_REQUEST_ERROR = 'RECIPE_REQUEST_ERROR';
export function networkError(error) {
	return {
		type: RECIPE_REQUEST_ERROR,
		payload: error,
	};
}

export function requestRecipe(id) {
	return function(dispatch) {
		dispatch(networkProgress());

		return axios.get(`/recipe/${id}`).then(
			response => {
				dispatch(networkSuccess());
				const newRecipe = response.data;
				dispatch(changeRecipe(newRecipe));
			},
			error => {
				console.log(error);
				dispatch(networkError(error));
			},
		);
	};
}

export const UPDATE_RECIPE_LIST_PROGRESS = 'UPDATE_RECIPE_LIST_PROGRESS';
export function updateRecipeListProgress() {
	return {
		type: UPDATE_RECIPE_LIST_PROGRESS,
	};
}

export const UPDATE_RECIPE_LIST_SUCCESS = 'UPDATE_RECIPE_LIST_SUCCESS';
export function updateRecipeListSuccess() {
	return {
		type: UPDATE_RECIPE_LIST_SUCCESS,
	};
}

export const UPDATE_RECIPE_LIST_ERROR = 'UPDATE_RECIPE_LIST_ERROR';
export function updateRecipeListError(error) {
	return {
		type: UPDATE_RECIPE_LIST_ERROR,
		payload: error,
	};
}

export const UPDATE_RECIPE_LIST = 'UPDATE_RECIPE_LIST';
export function updateRecipeList(list) {
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
				console.log(response);
			},
			error => {
				dispatch(updateRecipeListError(error));
				console.log(error);
			},
		);
	};
}
