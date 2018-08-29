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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classNames2 = require('../../utils/classNames');

var _classNames3 = _interopRequireDefault(_classNames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonPreview = function ButtonPreview(props) {
    var className = props.className,
        primary = props.primary,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'primary', 'children']);

    var cls = (0, _classNames3.default)((0, _defineProperty3.default)({
        'dtui-form-preview__btn': true,
        'dtui-form-preview__btn_default': !primary,
        'dtui-form-preview__btn_primary': primary
    }, className, className));
    return _react2.default.createElement(
        'a',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

ButtonPreview.defaultProps = {
    primary: false
};

exports.default = ButtonPreview;
module.exports = exports['default'];