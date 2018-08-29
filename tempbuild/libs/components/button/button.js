import _extends from 'babel-runtime/helpers/extends';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

import React from 'react';
import classNames from '../../utils/classNames';

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || _Object$getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                component = _props.component,
                type = _props.type,
                size = _props.size,
                plain = _props.plain,
                className = _props.className,
                children = _props.children,
                others = _objectWithoutProperties(_props, ['component', 'type', 'size', 'plain', 'className', 'children']);

            var Component = component ? component : this.props.href || type === 'vcode' ? 'a' : 'button';
            var cls = type === 'vcode' ? classNames('dtui-vcode-btn', _defineProperty({}, className, className)) : classNames(_defineProperty({
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

            return React.createElement(
                Component,
                _extends({}, others, { className: cls }),
                children,
                ' test'
            );
        }
    }]);

    return Button;
}(React.Component);

Button.defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal'
};
export default Button;
;