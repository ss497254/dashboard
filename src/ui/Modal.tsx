import React from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "../icons";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  className,
  children,
  onClose,
  ...props
}) => {
  if (!open) {
    document.body.classList.remove("modal-body-fixed");
    return null;
  }

  document.body.classList.add("modal-body-fixed");

  return createPortal(
    <div
      className="absolute inset-0 c bg-black/50 z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={["modal-container r shadow-xl", className].join(" ")}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
        <button onClick={onClose} className="absolute top-0 right-0 p-2">
          <CloseIcon size={22} />
        </button>
      </div>
    </div>,
    document.querySelector("body")!
  );
};
