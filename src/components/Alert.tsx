import React from "react";

export const Alert: React.FC = (props) => {
  const { children } = props;
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      {children}
    </div>
  );
};
