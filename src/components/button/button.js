
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
        const cls = type === 'vcode' ? classNames('bat-vcode-btn', {[className]: className}) : classNames({
            'bat-btn': true,
            'bat-btn_mini': size === 'small',
            'bat-btn_primary': type === 'primary' && !plain,
            'bat-btn_default': type === 'default' && !plain,
            'bat-btn_warn': type === 'warn',
            'bat-btn_plain-primary': type === 'primary' && plain,
            'bat-btn_plain-default': type === 'default' && plain,
            'bat-btn_disabled': this.props.disabled && !plain,
            'bat-btn_plain-disabled': this.props.disabled && plain,
            [className]: className
        });

        return (
            <Component { ...others } className={ cls }>{ children } test</Component>
        );
    }
};
