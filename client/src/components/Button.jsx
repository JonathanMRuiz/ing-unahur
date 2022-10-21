import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-green-500 rounded-[10px] outline-none ${styles}`}
  >
    Plan de estudio
  </button>
);

export default Button;
