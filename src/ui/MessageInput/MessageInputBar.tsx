import React, { useEffect, useRef } from "react";
import { SendIcon } from "src/icons";
import { getMessageStore } from "src/lib/getMessageStore";
import { IconButton } from "src/ui/Buttons/IconButton";
import { ExpandingTextArea } from "./ExpandingTextArea";

interface Props {
  channel: string;
}

export const MessageInputBar: React.FC<Props> = ({ channel }) => {
  const [addMessage, isSubmitting] = getMessageStore(channel)((state) => [
    state.addMessage,
    state.isSubmitting,
  ]);

  const ref = useRef<HTMLDivElement>(null);
  const isRunning = useRef(false);

  const onSubmit = async () => {
    if (isSubmitting || isRunning.current) return;

    isRunning.current = true;
    let text = ref.current?.innerText || "(empty)";
    if (ref.current) {
      ref.current.innerText = "";
      ref.current.focus();
    }
    await addMessage(text);
    isRunning.current = false;
  };

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        onSubmit();
      }
    };

    ref.current?.addEventListener("keydown", fn);
    return () => ref.current?.removeEventListener("keydown", fn);
  }, []);

  return (
    <div className="flex items-end p-2 border-t border-dark-700">
      <ExpandingTextArea ref={ref} />
      <IconButton
        size={40}
        btn="none"
        onClick={isSubmitting ? undefined : onSubmit}
        loading={isSubmitting}
        className="!p-2 ml-3 bg-dark-700 hover:bg-dark-600 duration-200 h-fit"
      >
        <SendIcon size={24} />
      </IconButton>
    </div>
  );
};
