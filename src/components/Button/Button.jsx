import React from 'react';
import './_button.scss'

const Button = ({className, children, ...otherProps}) => (
    <button className={className ? `btn ${className}` : "btn"} {...otherProps}>
        {children}
    </button>
);

export default Button;