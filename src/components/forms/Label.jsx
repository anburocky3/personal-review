import React from "react";
import PropTypes from "prop-types";

const Label = ({ id, text, required, children }) => {
  return (
    <div>
      <label htmlFor={id} className="text-gray-600 mb-2">
        {text} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
};

Label.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  required: PropTypes.bool,
};

export default Label;
