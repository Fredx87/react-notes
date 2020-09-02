import React from "react";
import { Spinner } from "./Spinner";

type ButtonVariant = "primary" | "secondary" | "link";

export interface ButtonProps {
  variant: ButtonVariant;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: "submit" | "button";
  onClick?: React.MouseEventHandler;
}

function getClassName(variant: ButtonVariant, disabled?: boolean): string {
  switch (variant) {
    case "primary": {
      const color = disabled ? "green-400" : "green-600";
      return `px-4 py-2 bg-${color} text-white border border-${color} rounded
      hover:bg-green-500 hover:border-green-500
      focus:outline-none focus:bg-green-700 focus:border-green-700`;
    }
    case "secondary": {
      const color = disabled ? "gray-500" : "gray-700";
      return `px-4 py-2 bg-white text-${color} border border-${color} rounded
      hover:border-black hover:text-black
      focus:bg-gray-300 focus:outline-none`;
    }
    case "link": {
      return `text-green-500 underline focus:outline-none`;
    }
  }
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant, isDisabled, isLoading, type, onClick, children } = props;

  const disabled = isDisabled || isLoading;

  const cursor = disabled ? "pointer-events-none" : "pointer-events-auto";
  const className = `${cursor} ${getClassName(variant, disabled)}`;
  const btnType = type || "button";

  return (
    <button
      disabled={disabled}
      className={className}
      type={btnType}
      onClick={onClick}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
};
