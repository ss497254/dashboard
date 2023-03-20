import React, { memo } from "react";
import useLongPress from "src/hooks/useLongPress";

interface props {
  content: string;
  id: string;
  time: string;
  dir: "left" | "right";
}

const dirClassNames = {
  left: "tick-l ml-auto",
  right: "tick-r mr-auto",
};

export const MessageBox: React.FC<props> = memo(
  ({ content, id, dir, time }) => {
    const { handlers, longpress } = useLongPress();

    return (
      <div
        {...handlers}
        className={[
          "max-w-[80%] rotate-180 p-3 whitespace-pre-wrap mx-3 my-1.5 relative rounded-md outline-none",
          dirClassNames[dir],
          longpress
            ? "bg-emerald-600 text-emerald-600"
            : "bg-dark-700 text-dark-700",
        ].join(" ")}
      >
        <p className="overflow-x-hidden text-sm text-white hover:break-words text-ellipsis">
          {content}
        </p>
        <div className="mt-2 -mb-2 -mr-1 text-xs text-right text-dark-100">
          {new Date(time).toString().substr(4, 20)}
        </div>
      </div>
    );
  }
);
