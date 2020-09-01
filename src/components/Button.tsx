import React from "react";
import { Spinner } from "./Spinner";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant: ButtonVariant;
  isDisabled?: boolean;
  isLoading?: boolean;
}

function getClassName(variant: ButtonVariant, disabled?: boolean): string {
  switch (variant) {
    case "primary": {
      const color = disabled ? "green-400" : "green-600";
      return `p-2 bg-${color} text-white border border-${color} rounded
      hover:bg-green-500 hover:border-green-500
      focus:outline-none focus:bg-green-700 focus:border-green-700`;
    }
    case "secondary": {
      const color = disabled ? "gray-500" : "gray-700";
      return `p-2 bg-white text-${color} border border-${color} rounded
      hover:border-black hover:text-black
      focus:bg-gray-300 focus:outline-none`;
    }
  }
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant, isDisabled, isLoading, children } = props;

  const disabled = isDisabled || isLoading;

  const cursor = disabled ? "pointer-events-none" : "pointer-events-auto";
  const className = `px-4 py-2 ${cursor} ${getClassName(variant, disabled)}`;

  return (
    <button disabled={disabled} className={className}>
      {isLoading && <Spinner />}
      {children}
    </button>
  );
};
