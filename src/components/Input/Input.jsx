import React from "react";

import "./_input.scss";

const Input = ({ className, id, labelText, errors, ...otherProps }) => (
  <div className={className ? `input ${className}` : "input"}>
    <input className="input__field" id={id} {...otherProps} />
    {labelText && (
      <label htmlFor={id} className="input__label">
        {labelText}
      </label>
    )}
    {errors &&
      errors.length > 0 &&
      errors.map((error, index) => (
        <p key={index} className="input__error">
          {error}
        </p>
      ))}
  </div>
);

export default Input;
