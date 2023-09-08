import * as React from "react";

export function CommentsIcon(
  props: React.SVGProps<SVGSVGElement> & { size?: number }
) {
  return (
    <svg
      width={props.size || 20}
      height={props.size || 20}
      fill="currentColor"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M285.6 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-33.6 77.6-76 77.6zM512.8 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-34.4 77.6-76 77.6zM739.2 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-34.4 77.6-76 77.6zM307.2 925.6c-5.6 0-12-1.6-17.6-4-12.8-5.6-21.6-17.6-24-31.2l-20-123.2 42.4-9.6 20.8 122.4 132.8-77.6 2.4 45.6-115.2 72c-6.4 3.2-14.4 5.6-21.6 5.6z"></path>
      <path d="M512 57.6C240 57.6 18.4 235.2 18.4 454.4c0 156 112.8 292 276.8 356l-7.2-52.8C154.4 696.8 64.8 583.2 64.8 454.4 64.8 260.8 265.6 104 512 104s447.2 156.8 447.2 350.4c0 193.6-200.8 350.4-447.2 350.4-13.6 0-57.6-2.4-70.4-3.2l-40.8 39.2c36 6.4 73.6 10.4 111.2 10.4 272 0 493.6-177.6 493.6-396.8S784 57.6 512 57.6z"></path>
    </svg>
  );
}
