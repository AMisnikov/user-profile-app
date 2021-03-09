import React from 'react';
import { SelectEl, SelectLabel, SelectField } from './Select.styles.jsx';

const Select = ({ labelText, id, options, ...otherProps }) => (
    <SelectEl>
        <SelectLabel htmlFor={id} >{labelText}</SelectLabel>
        <SelectField id={id}  {...otherProps}>
            {options.map( (option, index) => (<option key={index} value={option.value}>{option.name}</option>) )}
        </SelectField>
    </SelectEl>
   
);

export default Select;