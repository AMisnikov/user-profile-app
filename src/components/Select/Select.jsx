import React from 'react';

import './_select.scss';

const Select = ({ className, labelText, id, options, ...otherProps }) => (
    <div className={className ? `select ${className}` : 'select'}>
        <label htmlFor={id} className="select__label">{labelText}</label>
        <select id={id}  className="select__field" {...otherProps}>
            {options.map( (option, index) => (<option key={index} value={option.value}>{option.name}</option>) )}
        </select>
    </div>
   
);

export default Select;