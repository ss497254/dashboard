import React from "react";

interface props {}

export const CenterLoading: React.FC<props> = () => {
  return (
    <div className="flex-col h-screen c">
      <img src="/logo.png" height={180} width={180} />
      <div className="w-[160px] relative bg-dark-700 h-[3px] overflow-hidden my-8">
        <div className="bg-emerald-600 loading-bar w-16 h-[3px]"></div>
      </div>
      <div className="h-20" />
    </div>
  );
};
