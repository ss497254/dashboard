import { useEffect, useRef } from "react";

export const useElementVisible = (
  cb = () => {},
  options?: IntersectionObserverInit
) => {
  const ref = useRef(null);

  const callbackFunction: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting) cb();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return { ref };
};
