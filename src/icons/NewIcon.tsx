import * as React from "react";

export function NewIcon(
  props: React.SVGProps<SVGSVGElement> & { size?: number }
) {
  return (
    <svg
      width={props.size || 16}
      height={props.size || 16}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8-8a2 2 0 012 2v28a2 2 0 11-4 0V-6a2 2 0 012-2z" />
      <path d="M-8 8a2 2 0 012-2h28a2 2 0 110 4H-6a2 2 0 01-2-2z" />
    </svg>
  );
}
