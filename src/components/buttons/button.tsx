import { ButtonProps } from "./types";

import React from "react";

const baseClasses =
  "rounded font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const colorClasses = {
  primary:
    "bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500",
  secondary:
    "bg-gray-500 text-white hover:bg-gray-400 focus-visible:outline-gray-500",
};

const variantClasses = {
  filled: "",
  outlined:
    "border border-indigo-500 text-indigo-500 bg-transparent hover:bg-indigo-500 hover:text-white",
  text: "text-indigo-500 bg-transparent hover:bg-indigo-100",
};

const sizeClasses = {
  small: "px-2 py-1 text-xs",
  medium: "px-3 py-2 text-sm",
  large: "px-4 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  text,
  color = "primary",
  variant = "filled",
  size = "medium",
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`${baseClasses} ${colorClasses[color]} ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
