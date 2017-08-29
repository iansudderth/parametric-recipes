'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _scalingFactor_reducer = require('./scalingFactor_reducer');

var _scalingFactor_reducer2 = _interopRequireDefault(_scalingFactor_reducer);

var _recipe_reducer = require('./recipe_reducer');

var _recipe_reducer2 = _interopRequireDefault(_recipe_reducer);

var _recipeList_reducer = require('./recipeList_reducer');

var _recipeList_reducer2 = _interopRequireDefault(_recipeList_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	scalingFactor: _scalingFactor_reducer2.default,
	recipe: _recipe_reducer2.default,
	recipeList: _recipeList_reducer2.default
});

exports.default = rootReducer;