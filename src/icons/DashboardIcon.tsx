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
      <rect x="0" y="0" width="10" height="11" rx="2"></rect>
      <rect x="14" y="0" width="10" height="7" rx="2"></rect>
      <rect x="0" y="15" width="10" height="9" rx="2"></rect>
      <rect x="14" y="11" width="10" height="13" rx="2"></rect>
    </svg>
  );
}
