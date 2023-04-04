/* eslint-disable no-unused-expressions */
import React, { forwardRef, useMemo } from "react";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  containerClassName?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, containerClassName, error, label, ...props }, ref) => {
    const id = useMemo(() => Math.random().toString(), []);

    return (
      <div
        className={[
          "px-3 py-2 overflow-hidden text-sm rounded min-h-[64px] focus-within:ring-1 group bg-dark-600",
          error && "ring-red-600 ring-1",
          containerClassName,
        ].join(" ")}
      >
        <label htmlFor={id} className="text-dark-200">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={[
            "w-full py-1 placeholder-dark-300 bg-inherit focus:outline-none",
            className,
          ].join(" ")}
          {...props}
        ></input>
        <p className="-my-1 text-xs text-red-300">{error}</p>
      </div>
    );
  }
);
