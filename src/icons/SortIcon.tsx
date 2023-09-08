import * as React from "react";

export function SortIcon(
  props: React.SVGProps<SVGSVGElement> & { size?: number }
) {
  return (
    <svg
      width={props.size || 16}
      height={props.size || 16}
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.854,12.146a.5.5,0,0,1,0,.708l-3,3a.518.518,0,0,1-.163.109.5.5,0,0,1-.382,0,.518.518,0,0,1-.163-.109l-3-3a.5.5,0,0,1,.708-.708L25,14.293V.5a.5.5,0,0,1,1,0V14.293l2.146-2.147A.5.5,0,0,1,28.854,12.146Zm9-9-3-3a.518.518,0,0,0-.163-.109.505.505,0,0,0-.382,0,.518.518,0,0,0-.163.109l-3,3a.5.5,0,0,0,.708.708L34,1.707V15.5a.5.5,0,0,0,1,0V1.707l2.146,2.147a.5.5,0,1,0,.708-.708Z"
        transform="translate(-22)"
      ></path>
    </svg>
  );
}
