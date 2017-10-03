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

var _editMode_reducer = require('./editMode_reducer');

var _editMode_reducer2 = _interopRequireDefault(_editMode_reducer);

var _deleteDialog_reducer = require('./dialogReducers/deleteDialog_reducer');

var _deleteDialog_reducer2 = _interopRequireDefault(_deleteDialog_reducer);

var _discardChangesDialog_reducer = require('./dialogReducers/discardChangesDialog_reducer');

var _discardChangesDialog_reducer2 = _interopRequireDefault(_discardChangesDialog_reducer);

var _editAutDialog_reducer = require('./dialogReducers/editAutDialog_reducer');

var _editAutDialog_reducer2 = _interopRequireDefault(_editAutDialog_reducer);

var _saveDialog_reducer = require('./dialogReducers/saveDialog_reducer');

var _saveDialog_reducer2 = _interopRequireDefault(_saveDialog_reducer);

var _updateDialog_reducer = require('./dialogReducers/updateDialog_reducer');

var _updateDialog_reducer2 = _interopRequireDefault(_updateDialog_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  scalingFactor: _scalingFactor_reducer2.default,
  recipe: _recipe_reducer2.default,
  recipeList: _recipeList_reducer2.default,
  editMode: _editMode_reducer2.default,
  deleteDialog: _deleteDialog_reducer2.default,
  discardChangesDialog: _discardChangesDialog_reducer2.default,
  editAuthDialog: _editAutDialog_reducer2.default,
  saveDialog: _saveDialog_reducer2.default,
  updateDialog: _updateDialog_reducer2.default
});

exports.default = rootReducer;