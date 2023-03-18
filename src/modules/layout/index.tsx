import React from "react";
import { useClientOnly } from "src/hooks/useClientOnly";
import { DashboardNavBar } from "./DashboardNavbar";
import { DashboardSidebar } from "./DashboardSidebar";

interface props {
  children: React.ReactElement;
}

export const Layout: React.FC<props> = ({ children }) => {
  if (useClientOnly()) return null;

  return (
    <div className="lg:pl-[280px] text-dark-100 bg-dark-900 w-screen">
      <DashboardNavBar />
      {children}
      <DashboardSidebar />
    </div>
  );
};
