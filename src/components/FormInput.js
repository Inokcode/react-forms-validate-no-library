import React, { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  //
  return (
    <div className="formInput">
      <label>{label}</label>
      {/* <input
        placeholder={props.placeholder}
        onChange={(e) => props.setUserName(e.target.value)}
      /> */}
      {/* <input placeholder={props.placeholder} ref={props.refer} /> */}
      {/* <input placeholder={props.placeholder} name={props.name} /> */}
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
