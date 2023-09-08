import React from "react";
import { Spinner } from "../Spinner";
import { ButtonTypes } from "./ButtonTypes";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  btn?: keyof typeof ButtonTypes;
  className?: string;
  size?: number;
}
export const IconButton: React.FC<IconButtonProps> = ({
  className,
  btn = "default",
  children,
  loading,
  size = 30,
  disabled,
  ...prop
}) => {
  return (
    <button
      disabled={disabled || loading}
      style={{ height: size, width: size }}
      className={[
        "flex justify-center items-center rounded-md",
        ButtonTypes[btn],
        className,
      ].join(" ")}
      {...prop}
    >
      {loading ? <Spinner size={(size * 3) / 4} /> : children}
    </button>
  );
};
