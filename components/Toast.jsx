import React from "react";

const Toast = ({ toastMessage, isActive, status }) => {
  return (
    <div
      className={`absolute left-[25%] min-w-[30%] duration-500 text-xl z-10 -top-32 px-6 py-3 rounded-md border-red-700 bg-red-100 toast ${status} ${
        isActive && "active"
      }`}
    >
      <div>{toastMessage}</div>
    </div>
  );
};

export default Toast;
