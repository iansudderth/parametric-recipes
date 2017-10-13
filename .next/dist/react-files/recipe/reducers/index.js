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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LWZpbGVzL3JlY2lwZS9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJzY2FsaW5nRmFjdG9yIiwicmVjaXBlIiwicmVjaXBlTGlzdCIsImVkaXRNb2RlIiwiZGVsZXRlRGlhbG9nIiwiZGlzY2FyZENoYW5nZXNEaWFsb2ciLCJlZGl0QXV0aERpYWxvZyIsInNhdmVEaWFsb2ciLCJ1cGRhdGVEaWFsb2ciLCJyb290UmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBMEI7Ozs7QUFDakMsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBa0I7Ozs7OztBQUV6QixJQUFNO0FBQThCLEFBRWxDO0FBRmtDLEFBR2xDO0FBSGtDLEFBSWxDO0FBSmtDLEFBS2xDO0FBTGtDLEFBTWxDO0FBTmtDLEFBT2xDO0FBUGtDLEFBUWxDO0FBUmtDLEFBU2xDO0FBVEYsQUFBb0IsQUFBZ0IsQUFZcEM7QUFab0MsQUFDbEMsQ0FEa0I7O2tCQVlwQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9pYW5zdWRkZXJ0aC9EZXNrdG9wL3BhcmFtZXRyaWMtcmVjaXBlcyJ9