import React from "react";

interface props {
  footer: React.ReactNode;
  children: React.ReactNode;
  heading: string;
}

export const Card: React.FC<props> = ({ footer, heading, children }) => {
  return (
    <div className="mb-4 border rounded-lg lg:mb-6 border-dark-600 bg-dark-800">
      <h4 className="p-5 text-2xl font-bold md:p-8">{heading}</h4>
      <div className="p-5 text-base md:p-8 border-y border-dark-600">
        {children}
      </div>
      <div className="flex justify-end p-4 rounded-b-lg bg-dark-700">
        {footer}
      </div>
    </div>
  );
};
