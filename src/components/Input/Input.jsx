import React from "react";
import { InputContainer, InputField, InputLabel, InputErrors } from './Input.styles.jsx';



const Input = ({ id, labelText, errors, ...otherProps }) => (
  <InputContainer errors={errors}>
    <InputField id={id} {...otherProps} />
    {labelText && (
      <InputLabel htmlFor={id}>
        {labelText}
      </InputLabel>
    )}
    {errors &&
      errors.length > 0 &&
      errors.map((error, index) => (
        <InputErrors key={index}>
          {error}
        </InputErrors>
      ))}
  </InputContainer>
);

export default Input;
