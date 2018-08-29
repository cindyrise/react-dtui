import React, { Component } from 'react';
import classNames from '../../utils/classNames';

class ButtonArea extends Component {

    static defaultProps = {
        direction: 'vertical'
    };

    render() {
        const {direction, children, className} = this.props;
        const cls = classNames({
            'bat-btn-area': true,
            'bat-btn-area_inline': direction === 'horizontal',
            [className]: className
        });

        return (
            <div className={cls}>
                {children}
            </div>
        );
    }
};

export default ButtonArea;
