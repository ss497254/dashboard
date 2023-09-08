import * as React from "react";

export function DashboardIcon(
  props: React.SVGProps<SVGSVGElement> & { size?: number }
) {
  return (
    <svg
      width={props.size || 16}
      height={props.size || 16}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="2" width="9" height="11" rx="2"></rect>
      <rect x="13" y="2" width="9" height="7" rx="2"></rect>
      <rect x="2" y="15" width="9" height="7" rx="2"></rect>
      <rect x="13" y="11" width="9" height="11" rx="2"></rect>
    </svg>
  );
}
