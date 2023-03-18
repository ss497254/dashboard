import React, { useEffect, useRef } from "react";
import { useOnClickInside } from "src/hooks/useOnClickInside";

interface props {
  open: boolean;
  dir?: "left" | "right";
  backdrop?: boolean;
  permanent?: boolean;
  toggleOpen: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Drawer: React.FC<props> = ({
  open,
  children,
  dir = "left",
  toggleOpen,
  backdrop = true,
  permanent,
  className = "",
}) => {
  const ref = useRef<any>();
  useOnClickInside(ref, toggleOpen, permanent);

  let cn = "";

  useEffect(() => {
    if (!backdrop || !open || permanent) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      if (ref.current.contains(event.target)) {
        toggleOpen();
      }
    };

    ref.current?.addEventListener("click", listener);
    return () => {
      ref.current?.removeEventListener("click", listener);
    };
  });

  if (!(permanent || open))
    cn = dir === "left" ? "-translate-x-full " : "translate-x-full ";

  if (dir === "left") cn += "border-r";
  else cn += "border-l";

  return (
    <>
      <div
        className={`flex-c animate border-dark-700 duration-400 top-0 left-0 absolute z-20 h-screen bg-dark-800 w-[280px] scroll-thin ${cn} ${className}`}
        tabIndex={-1}
      >
        {children}
      </div>
      <div
        ref={ref}
        className={
          backdrop && open
            ? "absolute inset-y-0 z-10 w-screen backdrop-blur-sm"
            : undefined
        }
      />
    </>
  );
};
