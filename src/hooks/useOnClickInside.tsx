import { useEffect } from "react";

export const useOnClickInside = (
  ref: any,
  handler: (e: MouseEvent | TouchEvent) => void,
  enable: boolean = true
) => {
  useEffect(() => {
    if (!enable || !ref.current) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      handler(event);
      if (ref.current.contains(event.target)) {
      }
    };

    ref.current.addEventListener("click", listener);
    return () => {
      ref.current.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};
