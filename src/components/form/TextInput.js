import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ placeholder, onChange, value }) => {
  const changeHandler = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={changeHandler}
      placeholder={placeholder}
    />
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default TextInput;
