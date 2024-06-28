import { ButtonProps } from "./types";

import React from "react";

const baseClasses =
  "rounded font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const colorClasses = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline-blue-500",
  secondary:
    "bg-gray-500 text-white hover:bg-gray-400 focus-visible:outline-gray-500",
};

const variantClasses = {
  filled: "",
  outlined:
    "border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white",
  text: "text-blue-500 bg-transparent hover:bg-blue-100",
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
