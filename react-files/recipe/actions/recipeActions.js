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
