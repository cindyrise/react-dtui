'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _classNames3 = require('../../utils/classNames');

var _classNames4 = _interopRequireDefault(_classNames3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_React$Component) {
    (0, _inherits3.default)(Button, _React$Component);

    function Button() {
        (0, _classCallCheck3.default)(this, Button);
        return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
    }

    (0, _createClass3.default)(Button, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                component = _props.component,
                type = _props.type,
                size = _props.size,
                plain = _props.plain,
                className = _props.className,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['component', 'type', 'size', 'plain', 'className', 'children']);

            var Component = component ? component : this.props.href || type === 'vcode' ? 'a' : 'button';
            var cls = type === 'vcode' ? (0, _classNames4.default)('dtui-vcode-btn', (0, _defineProperty3.default)({}, className, className)) : (0, _classNames4.default)((0, _defineProperty3.default)({
                'dtui-btn': true,
                'dtui-btn_mini': size === 'small',
                'dtui-btn_primary': type === 'primary' && !plain,
                'dtui-btn_default': type === 'default' && !plain,
                'dtui-btn_warn': type === 'warn',
                'dtui-btn_plain-primary': type === 'primary' && plain,
                'dtui-btn_plain-default': type === 'default' && plain,
                'dtui-btn_disabled': this.props.disabled && !plain,
                'dtui-btn_plain-disabled': this.props.disabled && plain
            }, className, className));

            return _react2.default.createElement(
                Component,
                (0, _extends3.default)({}, others, { className: cls }),
                children,
                ' test'
            );
        }
    }]);
    return Button;
}(_react2.default.Component);

Button.defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal'
};
exports.default = Button;
;
module.exports = exports['default'];