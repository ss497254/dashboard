import React, { memo } from "react";

interface props {
  direction?: "left" | "right" | "auto";
  text: string;
}

const directionToClassName = {
  left: "tick-l mr-auto",
  right: "tick-r ml-auto",
};

export const MessageBox: React.FC<props> = memo(
  ({ text, direction = "auto" }) => {
    if (direction === "auto") {
      direction = Math.random() > 0.5 ? "left" : "right";
    }

    return (
      <div
        className={`max-w-[80%] whitespace-pre-wrap mx-3 my-4 rounded-md p-3 text-sm outline-none bg-dark-700 relative ${directionToClassName[direction]}`}
      >
        {text}
      </div>
    );
  }
);
