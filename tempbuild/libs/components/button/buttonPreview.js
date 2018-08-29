import _extends from 'babel-runtime/helpers/extends';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import classNames from '../../utils/classNames';

var ButtonPreview = function ButtonPreview(props) {
    var className = props.className,
        primary = props.primary,
        children = props.children,
        others = _objectWithoutProperties(props, ['className', 'primary', 'children']);

    var cls = classNames(_defineProperty({
        'dtui-form-preview__btn': true,
        'dtui-form-preview__btn_default': !primary,
        'dtui-form-preview__btn_primary': primary
    }, className, className));
    return React.createElement(
        'a',
        _extends({ className: cls }, others),
        children
    );
};

ButtonPreview.defaultProps = {
    primary: false
};

export default ButtonPreview;