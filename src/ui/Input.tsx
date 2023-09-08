import React, { forwardRef, useId } from "react";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  containerClassName?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, containerClassName, error, label, required, ...props },
    ref
  ) => {
    const id = useId();

    return (
      <div
        className={[
          "overflow-hidden text-sm rounded min-h-[64px] focus-within:ring-1 bg-dark-600",
          error && "ring-red-600 ring-1",
          required && "field-required",
          containerClassName,
        ].join(" ")}
      >
        <label htmlFor={id} className="block px-3 pt-2 pb-1 text-dark-200">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          required={required}
          className={[
            "w-full pb-3 px-3 placeholder-dark-300 bg-inherit focus:outline-none",
            className,
          ].join(" ")}
          {...props}
        ></input>
        <p className="-my-1 text-xs text-red-300">{error}</p>
      </div>
    );
  }
);
