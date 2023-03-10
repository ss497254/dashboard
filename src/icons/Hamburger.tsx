import * as React from "react";

export default function Hamburger(
  props: React.SVGProps<SVGSVGElement> & { size?: number }
) {
  return (
    <svg
      width={props.size || 16}
      height={props.size || 16}
      {...props}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <line
        x1="0"
        x2="24"
        y1="2"
        y2="2"
        id="Path"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      ></line>
      <line
        x1="0"
        x2="24"
        y1="12"
        y2="12"
        id="Path"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      ></line>
      <line
        x1="0"
        x2="24"
        y1="22"
        y2="22"
        id="Path"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      ></line>
    </svg>
  );
}
