import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";

const FormSelect = ({
  name,
  label,
  placeholder = "Enter information briefly!",
  options,
  register,
  error,
  required,
  disabled,
}) => {
  return (
    <div className="space-y-4">
      <Label id={name} text={label} required={required} />
      <select
        id={name}
        name={name}
        placeholder={placeholder}
        {...register}
        className="bg-gray-100 w-full px-4 py-2 rounded outline-none"
        disabled={disabled}
      >
        {placeholder && <option value="">Select {placeholder}</option>}
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            selected={option.value === "vistas.ac.in"}
          >
            {option.text}
          </option>
        ))}
      </select>
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};

FormSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  register: PropTypes.object,
  error: PropTypes.object,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default FormSelect;
