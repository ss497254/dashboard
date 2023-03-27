import React from "react";

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
  let cn = "";

  if (!(permanent || open))
    cn = dir === "left" ? "-translate-x-full " : "translate-x-full ";

  if (dir === "left") cn += "border-r";
  else cn += "border-l";

  return (
    <>
      <div
        className={`flex-c animate border-dark-500 duration-400 top-0 left-0 fixed z-50 h-screen bg-dark-800 w-[280px] scroll-thin ${cn} ${className}`}
        tabIndex={-1}
      >
        {children}
      </div>
      <div
        onClick={toggleOpen}
        className={
          backdrop && open
            ? "absolute inset-y-0 z-10 w-screen backdrop-blur-sm"
            : undefined
        }
      />
    </>
  );
};
