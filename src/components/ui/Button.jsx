import React from "react";
export function Button({ children, ...props }) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
}
