/* eslint-disable no-unused-expressions */
import React, { forwardRef, useMemo } from "react";

export interface TextAreaProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  label: string;
  containerClassName?: string;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, name, containerClassName, error, label, ...props }, ref) => {
    const id = useMemo(() => Math.random().toString(), []);

    return (
      <div
        className={[
          "px-3 py-2 overflow-hidden text-sm resize-y flex-c min-h-[80px] rounded focus-within:ring-1 group bg-dark-600",
          error && "ring-red-600 ring-1",
          containerClassName,
        ].join(" ")}
      >
        <label htmlFor={id} className="text-dark-200 group">
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          className={[
            "w-full py-1 placeholder-dark-300 resize-none flex-grow bg-inherit focus:outline-none",
            className,
          ].join(" ")}
          {...props}
        ></textarea>
        <p className="-my-1 text-xs text-red-300">{error}</p>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
