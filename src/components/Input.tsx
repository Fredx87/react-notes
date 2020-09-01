import React, { ChangeEventHandler } from "react";

export interface InputProps {
  type?: "text" | "email" | "password" | "textarea";
  label: string;
  id: string;
  required?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  className?: string;
}

export const Input = (props: InputProps) => {
  const { type, label, id, required, value, onChange, className } = props;

  const inputClassName = `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
    focus:outline-none focus:shadow-outline`;

  const inputProps = {
    className: inputClassName,
    id,
    required,
    value,
    onChange,
  };

  const InputComponent = () =>
    type === "textarea" ? (
      <textarea {...inputProps}></textarea>
    ) : (
      <input type={type} {...inputProps} />
    );

  return (
    <div className={className}>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <InputComponent />
    </div>
  );
};
