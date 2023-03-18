import React from "react";
import { Spinner } from "./Spinner";

interface props {
  title: string;
  loading?: boolean;
  disabled?: boolean;
}

const mode = {
  default: "bg-blue-500 text-white font-medium",
};

export const Button: React.FC<props> = ({ title, loading }) => {
  return <button className="c">{loading ? <Spinner /> : title}</button>;
};
