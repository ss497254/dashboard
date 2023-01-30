/* eslint-disable no-unused-expressions */
import React, { forwardRef } from "react";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  textarea?: boolean;
  rows?: number;
  error?: string;
  transparent?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, textarea, error, transparent, ...props }, ref) => {
    const bg = transparent ? `bg-transparent` : `bg-dark-600`;
    const ring = error ? `ring-1 ring-secondary` : "";
    const cn = `w-full py-2 px-3 rounded text-dark-100 placeholder-dark-300 focus:outline-none ${bg} ${ring} ${className} `;

    return textarea ? (
      <textarea
        ref={ref as any}
        className={cn}
        rows="3"
        cols="1"
        data-testid="textarea"
        {...(props as any)}
      />
    ) : (
      <input ref={ref} className={cn} data-testid="input" {...props} />
    );
  }
);

Input.displayName = "Input";
