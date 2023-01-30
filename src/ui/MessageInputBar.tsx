import React, { RefObject, useRef } from "react";
import { ExpandingTextArea } from "./ExpandingTextArea";
import { IconButton } from "./IconButton";

interface props {
  onSubmit: (message: string) => void;
}

export const MessageInputBar: React.FC<props> = ({ onSubmit }) => {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <div className="flex p-3 px-4 bg-dark-800">
      <ExpandingTextArea name="message" ref={ref} />
      <IconButton
        icon="Rocket"
        onClick={() => {
          console.log(ref.current?.textContent);

          onSubmit(ref.current?.textContent || "(empty)");

          if (ref.current) ref.current.textContent = "";
        }}
        className="p-3 ml-3 rounded-full hover:rounded h-fit bg-dark-600 text-dark-100"
      />
    </div>
  );
};
