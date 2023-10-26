import React from "react";

const Toast = ({ error, isError, onClose }) => {
  return (
    <div
      className={`absolute left-[25%] duration-500 text-xl z-10 -top-32 text-red-700 px-6 py-3 rounded-md border-red-700 bg-red-100 toast ${
        isError ? "error" : "success"
      }`}
    >
      <div>{error}</div>
    </div>
  );
};

export default Toast;
