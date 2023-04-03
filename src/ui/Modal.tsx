import React from "react";
import { createPortal } from "react-dom";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  children: React.ReactNode;
  setOpen: (x: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  children,
  setOpen,
  ...props
}) => {
  if (!open) {
    document.body.classList.remove("fixed");
    return null;
  }

  document.body.classList.add("fixed");

  return createPortal(
    <div
      onClick={(e) => {
        !e.defaultPrevented && setOpen(false);
      }}
      className="fixed z-[1000] text-white duration-500 c flex-col inset-0 backdrop-blur-sm"
    >
      <div {...props} onClick={(e) => e.preventDefault()}>
        {children}
      </div>
    </div>,
    document.querySelector("body")!
  );
};
