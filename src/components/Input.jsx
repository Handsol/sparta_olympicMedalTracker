import React from "react";

const Input = ({ label, type = "text", value, name, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} value={value} name={name} onChange={onChange} />
    </div>
  );
};

export default Input;
