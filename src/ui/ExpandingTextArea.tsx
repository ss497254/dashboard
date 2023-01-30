/* eslint-disable no-unused-expressions */
import React, { forwardRef, useState } from "react";

export interface TextAreaProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  textarea?: boolean;
  minRows?: number;
  error?: string;
  transparent?: boolean;
}

export const ExpandingTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, textarea, error, transparent, ...props }, ref) => {
    const [rows, setRows] = useState(1);
    const bg = transparent ? `bg-transparent` : `bg-dark-700`;
    const ring = error ? `ring-1 ring-secondary` : "";
    const cn = `remove-scroll w-full py-2 px-3 rounded text-dark-100 placeholder-dark-300 focus:outline-none ${bg} ${ring} ${className} `;

    return (
      <textarea
        ref={ref as any}
        className={cn}
        style={{ resize: "none" }}
        rows={rows}
        onChange={({ target: { value } }) => {
          setRows(
            Math.min(10, (value.match(new RegExp("\n", "g"))?.length || 0) + 1)
          );
        }}
        data-testid="textarea"
        {...props}
      />
    );
  }
);

ExpandingTextArea.displayName = "TextArea";
