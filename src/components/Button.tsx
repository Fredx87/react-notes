import React from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant: ButtonVariant;
}

function getClassName(variant: ButtonVariant): string {
  switch (variant) {
    case "primary":
      return "p-2 bg-green-600 text-white border border-green-500 rounded hover:bg-green-500 focus:outline-none focus:bg-green-700";
    case "secondary":
      return "p-2 bg-white text-gray-700 border border-gray-700 rounded hover:border-black hover:text-black focus:bg-gray-300 focus:outline-none";
  }
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant, children } = props;

  return <button className={getClassName(variant)}>{children}</button>;
};
