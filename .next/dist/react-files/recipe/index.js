'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iansudderth/Desktop/parametric-recipes/react-files/recipe/index.js';


var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxPromise2.default)(_redux.createStore);

var Boiler = function Boiler() {
	return _react2.default.createElement(_reactRedux.Provider, {
		store: createStoreWithMiddleware(_reducers2.default),
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement(_App2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}));
};

exports.default = Boiler;