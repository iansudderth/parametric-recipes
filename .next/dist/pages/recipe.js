'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../react-files/recipe/index');

var _index2 = _interopRequireDefault(_index);

var _withRoot = require('../react-files/style/withRoot');

var _withRoot2 = _interopRequireDefault(_withRoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iansudderth/Desktop/parametric-recipes/pages/recipe.js?entry';


var RecipePage = function (_Component) {
	(0, _inherits3.default)(RecipePage, _Component);

	function RecipePage() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RecipePage);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RecipePage.__proto__ || (0, _getPrototypeOf2.default)(RecipePage)).call.apply(_ref, [this].concat(args))), _this), _this.seedState = {
			recipeList: _this.props.query.recipeList
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RecipePage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_index2.default, { seedState: this.seedState, __source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			});
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
				var query = _ref2.query;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								return _context.abrupt('return', { query: query });

							case 1:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref3.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RecipePage;
}(_react.Component);

exports.default = (0, _withRoot2.default)(RecipePage);