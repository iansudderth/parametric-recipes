'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _context = require('../react-files/style/context');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iansudderth/Desktop/parametric-recipes/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var context = (0, _context.getContext)();
      return _react2.default.createElement('html', { lang: 'en', dir: 'ltr', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'My page'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'user-scalable=0, initial-scale=1, ' + 'minimum-scale=1, width=device-width, height=device-height',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('link', { rel: 'manifest', href: '/static/manifest.json', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('meta', { name: 'theme-color', content: context.theme.palette.primary[500], __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })));
    }
  }]);

  return MyDocument;
}(_document2.default);

MyDocument.getInitialProps = function (ctx) {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Reset the context for handling a new request.
  (0, _context.setContext)();
  var page = ctx.renderPage();
  // Get the context with the collected side effects.
  var context = (0, _context.getContext)();
  return (0, _extends3.default)({}, page, {
    styles: _react2.default.createElement('style', {
      id: 'jss-server-side'
      // eslint-disable-next-line react/no-danger
      , dangerouslySetInnerHTML: { __html: context.sheetsRegistry.toString() },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      }
    })
  });
};

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvY3VtZW50IiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiZ2V0Q29udGV4dCIsInNldENvbnRleHQiLCJNeURvY3VtZW50IiwiY29udGV4dCIsInRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYWdlIiwicmVuZGVyUGFnZSIsInN0eWxlcyIsIl9faHRtbCIsInNoZWV0c1JlZ2lzdHJ5IiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVksQUFBTSxBQUFNOzs7O0FBQy9CLEFBQVMsQUFBWSxBQUFrQjs7Ozs7OztJLEFBRWpDOzs7Ozs7Ozs7Ozs2QkFDSyxBQUNQO1VBQU0sVUFBTixBQUFnQixBQUNoQjs2QkFDRSxjQUFBLFVBQU0sTUFBTixBQUFXLE1BQUssS0FBaEIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxvREFBTSxTQUFOLEFBQWM7b0JBQWQ7c0JBRkYsQUFFRSxBQUVBO0FBRkE7O2NBRUEsQUFDTyxBQUNMO2lCQUNFLHVDQUhKLEFBSUk7O29CQUpKO3NCQUpGLEFBSUUsQUFXQTtBQVhBO0FBQ0Usa0RBVUksS0FBTixBQUFVLFlBQVcsTUFBckIsQUFBMEI7b0JBQTFCO3NCQWZGLEFBZUUsQUFFQTtBQUZBO2tEQUVNLE1BQU4sQUFBVyxlQUFjLFNBQVMsUUFBQSxBQUFRLE1BQVIsQUFBYyxRQUFkLEFBQXNCLFFBQXhELEFBQWtDLEFBQThCO29CQUFoRTtzQkFqQkYsQUFpQkUsQUFDQTtBQURBOzthQUNBLEFBQ00sQUFDSjtjQUZGLEFBRU87O29CQUZQO3NCQW5CSixBQUNFLEFBa0JFLEFBS0Y7QUFMRTtBQUNFLDJCQUlKLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBM0JOLEFBQ0UsQUF3QkUsQUFFRSxBQUlQO0FBSk87QUFBQTs7Ozs7QUE5QmUsQTs7QUFxQ3pCLFdBQUEsQUFBVyxrQkFBa0IsVUFBQSxBQUFDLEtBQVEsQUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO01BQU0sT0FBTyxJQUFiLEFBQWEsQUFBSSxBQUNqQjtBQUNBO01BQU0sVUFBTixBQUFnQixBQUNoQjtvQ0FBQSxBQUNLOztVQUdJLEFBQ0g7QUFGRjtBQUNFLFFBRUEseUJBQXlCLEVBQUUsUUFBUSxRQUFBLEFBQVEsZUFIN0MsQUFHMkIsQUFBVSxBQUF1Qjs7a0JBSDVEO29CQUhKLEFBR0ksQUFPTDtBQVBLO0tBQUE7QUFERjtBQXpCSixBQW1DQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2lhbnN1ZGRlcnRoL0Rlc2t0b3AvcGFyYW1ldHJpYy1yZWNpcGVzIn0=