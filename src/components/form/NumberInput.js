import React from "react";
import PropTypes from "prop-types";

const NumberInput = ({ value, min, max, step, onChange, placeholder }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="number"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default NumberInput;
