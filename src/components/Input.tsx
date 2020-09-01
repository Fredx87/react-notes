import React from "react";

export interface InputProps {
  type?: "text" | "email" | "password" | "textarea";
}

export const Input = (props: InputProps) => {
  const { type } = props;

  const className =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  const inputProps = {
    className,
  };

  return type === "textarea" ? (
    <textarea {...inputProps}></textarea>
  ) : (
    <input type={type} {...inputProps} />
  );
};
