
import React from 'react';
import classNames from '../../utils/classNames';

export default class Button extends React.Component {

    static defaultProps = {
        disabled: false,
        type: 'primary',
        size: 'normal',
    };

    render() {
        const { component, type, size, plain, className, children, ...others } = this.props;
        const Component = component ? component : this.props.href || type === 'vcode' ? 'a' : 'button';
        const cls = type === 'vcode' ? classNames('dtui-vcode-btn', {[className]: className}) : classNames({
            'dtui-btn': true,
            'dtui-btn_mini': size === 'small',
            'dtui-btn_primary': type === 'primary' && !plain,
            'dtui-btn_default': type === 'default' && !plain,
            'dtui-btn_warn': type === 'warn',
            'dtui-btn_plain-primary': type === 'primary' && plain,
            'dtui-btn_plain-default': type === 'default' && plain,
            'dtui-btn_disabled': this.props.disabled && !plain,
            'dtui-btn_plain-disabled': this.props.disabled && plain,
            [className]: className
        });

        return (
            <Component { ...others } className={ cls }>{ children } test</Component>
        );
    }
};
