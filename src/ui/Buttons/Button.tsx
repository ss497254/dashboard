import React from "react";
import { Spinner } from "../Spinner";
import { ButtonTypes } from "./ButtonTypes";

export const BtnSizes = {
  xs: "text-xs px-2.5 py-1",
  sm: "text-sm leading-4 px-3 py-2",
  md: "text-base px-5 py-2",
  lg: "text-base px-6 py-2",
  xl: "text-lg px-7 py-3",
  none: "",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  btn?: keyof typeof ButtonTypes;
  iconSize?: number;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  Icon?: React.ReactNode;
  loadingCentered?: boolean;
  size?: keyof typeof BtnSizes;
}

export const Button: React.FC<ButtonProps> = ({
  loading,
  btn = "default",
  icon,
  size = "md",
  disabled,
  iconSize,
  children,
  className,
  ...props
}) => {
  const classes = [
    "relative flex items-center justify-center rounded-md duration-300",
  ];

  if (className) {
    classes.push(className);
  }

  if (size) {
    classes.push(BtnSizes[size]);
  }

  if (disabled) {
    classes.push("cursor-not-allowed");
  }

  classes.push(ButtonTypes[btn]);

  return (
    <button
      disabled={disabled || loading}
      className={classes.join(" ")}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 bg-inherit rounded-xl flex items-center justify-center">
          <Spinner size={iconSize} />
        </div>
      )}
      {icon}
      {children}
    </button>
  );
};
