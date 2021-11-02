import React from 'react';
import './formInput.css';

const FormInput = (props) => {
  return (
    <div className="formInput">
      <label>Username</label>
      {/* <input
        placeholder={props.placeholder}
        onChange={(e) => props.setUserName(e.target.value)}
      /> */}
      <input placeholder={props.placeholder} ref={props.refer} />
    </div>
  );
};

export default FormInput;
