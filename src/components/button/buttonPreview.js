import React from 'react';
import classNames from '../../utils/classNames';

const ButtonPreview = (props) => {
    const { className, primary, children, ...others } = props;
    const cls = classNames({
        'bat-form-preview__btn': true,
        'bat-form-preview__btn_default': !primary,
        'bat-form-preview__btn_primary': primary,
        [className]: className
    });
    return (
        <a className={cls} {...others}>
            {children}
        </a>
    );
};

ButtonPreview.defaultProps = {
    primary: false
};

export default ButtonPreview;
