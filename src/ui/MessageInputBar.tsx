import React, { useRef } from "react";
import { ExpandingTextArea } from "./ExpandingTextArea";
import { IconButton } from "./IconButton";

interface props {
  submitting?: boolean;
  onSubmit: (message: string) => void;
}

export const MessageInputBar: React.FC<props> = ({ onSubmit, submitting }) => {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <div className="flex items-end p-3 px-4 bg-dark-700">
      <ExpandingTextArea name="message" ref={ref} />
      <IconButton
        icon={submitting ? "Loading" : "Rocket"}
        onClick={() => {
          if (submitting) return;

          onSubmit(ref.current?.innerText || "(empty)");

          if (ref.current) {
            ref.current.innerText = "";
            ref.current.focus();
          }
        }}
        className="p-3 ml-3 rounded-full hover:rounded h-fit bg-dark-600"
      />
    </div>
  );
};
