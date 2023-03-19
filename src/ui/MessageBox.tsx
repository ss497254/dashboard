import React, { memo } from "react";

interface props {
  content: string;
  id: string;
  time: string;
  direction: "left" | "right";
}

const dirClassNames = {
  left: "tick-l mr-auto",
  right: "tick-r ml-auto",
};

export const MessageBox: React.FC<props> = memo(
  ({ content, id, direction, time }) => {
    return (
      <div
        className={`max-w-[80%] whitespace-pre-wrap mx-3 my-1.5 relative rounded-md outline-none bg-dark-700 ${dirClassNames[direction]}`}
      >
        <p className="p-3 overflow-x-hidden text-sm text-white hover:break-words text-ellipsis">
          {content}
        </p>
      </div>
    );
  }
);
