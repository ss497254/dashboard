import React from "react";

export const Logo = ({
  size = 128,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & { size?: number }) => {
  return <img src="/logo.png" height={size} width={size} {...props} />;
};
