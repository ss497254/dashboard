import React from "react";

interface props {}

export const CenterLoading: React.FC<props> = () => {
  return (
    <div className="flex-col w-screen h-screen bg-white center">
      <img src="/assets/icon.png" height={180} width={180} />
      <div className="w-[160px] relative bg-blue-100 h-[3px] overflow-hidden my-8">
        <div className="bg-blue-500 loading-bar w-16 h-[3px]"></div>
      </div>
      <div className="h-20" />
    </div>
  );
};
