import { useEffect, useRef } from "react";

export const useElementVisible = (
  cb = () => {},
  options?: IntersectionObserverInit
) => {
  const elementRef = useRef(null);

  const callbackFunction: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting) cb();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef, options]);

  return { elementRef };
};
