'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _RecipeContainer = require('./container/RecipeContainer');

var _RecipeContainer2 = _interopRequireDefault(_RecipeContainer);

var _RecipeEditorContainer = require('./container/RecipeEditorContainer');

var _RecipeEditorContainer2 = _interopRequireDefault(_RecipeEditorContainer);

var _NavBar = require('./components/NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _SaveDialog = require('./components/dialogs/SaveDialog');

var _SaveDialog2 = _interopRequireDefault(_SaveDialog);

var _EditAuthDialog = require('./components/dialogs/EditAuthDialog');

var _EditAuthDialog2 = _interopRequireDefault(_EditAuthDialog);

var _DiscardChangesDialog = require('./components/dialogs/DiscardChangesDialog');

var _DiscardChangesDialog2 = _interopRequireDefault(_DiscardChangesDialog);

var _UpdateDialog = require('./components/dialogs/UpdateDialog');

var _UpdateDialog2 = _interopRequireDefault(_UpdateDialog);

var _DeleteDialog = require('./components/dialogs/DeleteDialog');

var _DeleteDialog2 = _interopRequireDefault(_DeleteDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_NavBar2.default, null), props.editMode ? _react2.default.createElement(_RecipeEditorContainer2.default, null) : _react2.default.createElement(_RecipeContainer2.default, null), _react2.default.createElement(_SaveDialog2.default, null), _react2.default.createElement(_EditAuthDialog2.default, null), _react2.default.createElement(_DiscardChangesDialog2.default, null), _react2.default.createElement(_UpdateDialog2.default, null), _react2.default.createElement(_DeleteDialog2.default, null));
}

function mapStateToProps(_ref) {
  var editMode = _ref.editMode;

  return { editMode: editMode };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);