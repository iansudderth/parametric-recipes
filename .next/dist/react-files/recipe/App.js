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

var _jsxFileName = '/Users/iansudderth/Desktop/parametric-recipes/react-files/recipe/App.js';


function App(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_NavBar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), props.editMode ? _react2.default.createElement(_RecipeEditorContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }) : _react2.default.createElement(_RecipeContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement(_SaveDialog2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement(_EditAuthDialog2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement(_DiscardChangesDialog2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement(_UpdateDialog2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement(_DeleteDialog2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }));
}

function mapStateToProps(_ref) {
  var editMode = _ref.editMode;

  return { editMode: editMode };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LWZpbGVzL3JlY2lwZS9BcHAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiUmVjaXBlQ29udGFpbmVyIiwiUmVjaXBlRWRpdG9yQ29udGFpbmVyIiwiTmF2QmFyIiwiU2F2ZURpYWxvZyIsIkVkaXRBdXRoRGlhbG9nIiwiRGlzY2FyZENoYW5nZXNEaWFsb2ciLCJVcGRhdGVEaWFsb2ciLCJEZWxldGVEaWFsb2ciLCJBcHAiLCJwcm9wcyIsImVkaXRNb2RlIiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFPLEFBQXFCOzs7O0FBQzVCLEFBQU8sQUFBMkI7Ozs7QUFDbEMsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQTBCOzs7O0FBQ2pDLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFrQjs7Ozs7Ozs7O0FBRXpCLFNBQUEsQUFBUyxJQUFULEFBQWEsT0FBTyxBQUNsQjt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQztBQUREO0FBQUEsWUFDQyxBQUFNLDJCQUFXLEFBQUM7O2dCQUFEO2tCQUFqQixBQUFpQjtBQUFBO0FBQUEsR0FBQSxvQkFBNEIsQUFBQzs7Z0JBQUQ7a0JBRmhELEFBRWdELEFBQzlDO0FBRDhDO0FBQUEsR0FBQSxtQkFDOUMsQUFBQzs7Z0JBQUQ7a0JBSEYsQUFHRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDOztnQkFBRDtrQkFKRixBQUlFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUM7O2dCQUFEO2tCQUxGLEFBS0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBTkYsQUFNRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDOztnQkFBRDtrQkFSSixBQUNFLEFBT0UsQUFHTDtBQUhLO0FBQUE7OztBQUtOLFNBQUEsQUFBUyxzQkFBOEI7TUFBWixBQUFZLGdCQUFaLEFBQVksQUFDckM7O1NBQU8sRUFBRSxVQUFULEFBQU8sQUFDUjtBQUVEOztrQkFBZSx5QkFBQSxBQUFRLGlCQUF2QixBQUFlLEFBQXlCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaWFuc3VkZGVydGgvRGVza3RvcC9wYXJhbWV0cmljLXJlY2lwZXMifQ==