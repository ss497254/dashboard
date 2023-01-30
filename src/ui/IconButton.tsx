import React from "react";
import * as Icons from "../icons";

interface props {
  iconSize?: number;
  icon: keyof typeof Icons;
  cn?: string;
}

export const IconButton: React.FC<
  props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ icon, cn, iconSize, ...prop }) => {
  return <button {...prop}>{Icons[icon]({ size: iconSize })}</button>;
};
