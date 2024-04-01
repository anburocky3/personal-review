import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";

const FormInput = ({
  type = "text",
  name,
  label,
  placeholder = "Enter Field",
  register,
  error,
  required,
}) => {
  return (
    <div className="space-y-4">
      <Label id={name} text={label} required={required} />
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...register}
        className="bg-gray-100 w-full px-4 py-2 rounded outline-none"
      />
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
  required: PropTypes.bool,
};

export default FormInput;
