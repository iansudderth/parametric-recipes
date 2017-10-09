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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iansudderth/Desktop/parametric-recipes/react-files/recipe/App.js';


function App(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_NavBar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), props.editMode ? _react2.default.createElement(_RecipeEditorContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }) : _react2.default.createElement(_RecipeContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_SaveDialog2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_EditAuthDialog2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
}

function mapStateToProps(_ref) {
  var editMode = _ref.editMode;

  return { editMode: editMode };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);