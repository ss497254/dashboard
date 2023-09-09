import { useRef } from "react";

export const useScrollToBottom = () => {
  const ref = useRef<any>();

  return {
    ref,
    scroll: () => {
      if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    },
  };
};
