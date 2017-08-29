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

export const NETWORK_PROGRESS = 'NETWORK_PROGRESS';
export function networkProgress() {
	return {
		type: NETWORK_PROGRESS,
	};
}

export const NETWORK_SUCCESS = 'NETWORK_SUCCESS';
export function networkSuccess() {
	return {
		type: NETWORK_SUCCESS,
	};
}
export const NETWORK_ERROR = 'NETWORK_ERROR';
export function networkError(error) {
	return {
		type: NETWORK_ERROR,
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
