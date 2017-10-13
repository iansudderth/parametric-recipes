'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iansudderth/Desktop/parametric-recipes/react-files/recipe/index.js';


var createStoreWithMiddleware = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default))(_redux.createStore);

var Boiler = function Boiler(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_reactRedux.Provider, { store: createStoreWithMiddleware(_reducers2.default, props.seedState), __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })));
};

exports.default = Boiler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LWZpbGVzL3JlY2lwZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3ZpZGVyIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwidGh1bmsiLCJyZWR1Y2VycyIsIkFwcCIsImNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUiLCJCb2lsZXIiLCJwcm9wcyIsInNlZWRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUyxBQUFhOztBQUN0QixBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFTOzs7Ozs7Ozs7QUFFaEIsSUFBTSw0QkFBNEIsaURBQWxDLEFBQWtDLEFBQW9CLEFBQWdCLEFBQ3BFOztBQUdGLElBQU0sU0FBUyxTQUFULEFBQVMsY0FBQTt5QkFDYixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsc0NBQVMsT0FBTyxBQUEwQiw4Q0FBVSxNQUFyRCxBQUFpQixBQUEwQztnQkFBM0Q7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUM7O2dCQUFEO2tCQUhTLEFBQ2IsQUFDRSxBQUNFO0FBQUE7QUFBQTtBQUhOLEFBUUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2lhbnN1ZGRlcnRoL0Rlc2t0b3AvcGFyYW1ldHJpYy1yZWNpcGVzIn0=