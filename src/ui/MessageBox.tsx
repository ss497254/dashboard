import React from "react";

interface props {
  direction: "left" | "right";
  text: string;
}

export const MessageBox: React.FC<props> = ({ text, direction }) => {
  return (
    <div className="max-w-[80%] m-3 rounded-md p-3 text-sm outline-none bg-dark-700 text-dark-100 relative tick">
      {text}
    </div>
  );
};
