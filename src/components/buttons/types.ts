export interface ButtonProps {
  text: string;
  color?: "primary" | "secondary";
  variant?: "filled" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}
