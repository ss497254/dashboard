import React, { memo } from "react";

interface props {
  direction?: "left" | "right" | "auto";
  text: string;
  id: number;
}

const dirClassNames = {
  left: "tick-l mr-auto",
  right: "tick-r ml-auto",
};

export const MessageBox: React.FC<props> = memo(
  ({ text, id, direction = "auto" }) => {
    if (direction === "auto") {
      direction = id % 10 > 4 ? "left" : "right";
    }

    return (
      <div
        className={`max-w-[80%] whitespace-pre-wrap mx-3 my-1.5 relative rounded-md outline-none bg-dark-700 ${dirClassNames[direction]}`}
      >
        <p className="p-3 overflow-x-hidden text-sm text-white hover:break-words text-ellipsis">
          {text}
        </p>
      </div>
    );
  }
);
