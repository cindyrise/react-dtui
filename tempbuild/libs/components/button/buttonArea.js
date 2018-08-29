import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import classNames from '../../utils/classNames';

var ButtonArea = function (_Component) {
    _inherits(ButtonArea, _Component);

    function ButtonArea() {
        _classCallCheck(this, ButtonArea);

        return _possibleConstructorReturn(this, (ButtonArea.__proto__ || _Object$getPrototypeOf(ButtonArea)).apply(this, arguments));
    }

    _createClass(ButtonArea, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                direction = _props.direction,
                children = _props.children,
                className = _props.className;

            var cls = classNames(_defineProperty({
                'dtui-btn-area': true,
                'dtui-btn-area_inline': direction === 'horizontal'
            }, className, className));

            return React.createElement(
                'div',
                { className: cls },
                children
            );
        }
    }]);

    return ButtonArea;
}(Component);

ButtonArea.defaultProps = {
    direction: 'vertical'
};
;

export default ButtonArea;