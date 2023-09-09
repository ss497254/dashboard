import React, { forwardRef, useId } from "react";

export interface TextAreaProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  label: string;
  containerClassName?: string;
  error?: string | boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { className, containerClassName, error, label, required, ...props },
    ref
  ) => {
    const id = useId();

    return (
      <div
        className={[
          "overflow-hidden text-sm rounded focus-within:ring-1 bg-dark-600",
          error && "ring-red-600 ring-1",
          required && "field-required",
          containerClassName,
        ].join(" ")}
      >
        <label htmlFor={id} className="block px-3 pt-2 text-dark-200">
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          required={required}
          className={[
            "w-full pb-3 px-3 pt-1.5 placeholder-dark-300 resize-y bg-inherit focus:outline-none",
            className,
          ].join(" ")}
          {...props}
        ></textarea>
        {typeof error === "string" && (
          <p className="-my-1 text-xs text-red-300">{error}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
