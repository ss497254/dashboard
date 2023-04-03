import React from "react";
import { Modal, ModalProps } from "./Modal";

interface props extends ModalProps {
  footer: React.ReactNode;
  children: React.ReactNode | any;
  heading: string;
}

export const StyledModal: React.FC<props> = ({
  children,
  heading,
  footer,
  open,
  setOpen,
  ...props
}) => {
  return (
    <Modal open={open} setOpen={setOpen} {...props}>
      <div className="mb-4 rounded-lg lg:mb-6 border-500 bg-dark-800">
        <h4 className="p-5 text-2xl font-bold md:p-7">{heading}</h4>
        <div className="p-5 overflow-y-scroll max-h-[60vh] text-base md:p-8 border-y border-dark-600">
          {children}
        </div>
        <div className="flex justify-end p-4 rounded-b-lg bg-dark-700">
          {footer}
        </div>
      </div>
    </Modal>
  );
};
