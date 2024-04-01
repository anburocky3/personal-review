import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";

const TextArea = ({
  name,
  label,
  placeholder = "Enter information briefly!",
  register,
  error,
  required,
}) => {
  return (
    <div className="space-y-4">
      <Label id={name} text={label} required={required} />
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        {...register}
        className="bg-gray-100 w-full px-4 py-2 rounded outline-none"
      ></textarea>
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
  required: PropTypes.bool,
};

export default TextArea;
