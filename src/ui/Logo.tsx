import React, { forwardRef } from "react";

export const Logo = forwardRef(
  ({ size = 128 }: any, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <img src="/logo.png" height={size} width={size} />
      </div>
    );
  }
);
