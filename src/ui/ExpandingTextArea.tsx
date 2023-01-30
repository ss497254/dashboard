/* eslint-disable no-unused-expressions */
import React, { forwardRef } from "react";

export interface TextAreaProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  textarea?: boolean;
  minRows?: number;
  error?: string;
  transparent?: boolean;
}

export const ExpandingTextArea = forwardRef<HTMLSpanElement, TextAreaProps>(
  ({ className, textarea, error, transparent, ...props }, ref) => {
    const bg = transparent ? `bg-transparent` : `bg-dark-700`;
    const ring = error ? `ring-1 ring-secondary` : "";
    const cn = `remove-scroll whitespace-pre-line overflow-y-scroll max-h-[200px] w-full py-2 px-3 rounded text-dark-100 placeholder-dark-300 focus:outline-none ${bg} ${ring} ${className} `;

    return (
      <span
        ref={ref as any}
        className={cn}
        style={{ resize: "none" }}
        contentEditable
        data-testid="textarea"
        {...props}
      />
    );
  }
);

ExpandingTextArea.displayName = "TextArea";
