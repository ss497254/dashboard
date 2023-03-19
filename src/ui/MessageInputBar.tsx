import React, { useRef } from "react";
import { ExpandingTextArea } from "./ExpandingTextArea";
import { IconButton } from "./IconButton";

interface props {
  submitting?: boolean;
  onSubmit: (message: string) => void;
}

export const MessageInputBar: React.FC<props> = ({ onSubmit }) => {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <div className="flex items-end p-3 px-4 bg-dark-800">
      <ExpandingTextArea name="message" ref={ref} />
      <IconButton
        icon="Rocket"
        onClick={() => {
          onSubmit(ref.current?.innerText || "(empty)");

          if (ref.current) ref.current.innerText = "";
        }}
        className="p-3 ml-3 rounded-full hover:rounded h-fit bg-dark-600"
      />
    </div>
  );
};
