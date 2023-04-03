import React from "react";
import { useClientOnly } from "src/hooks/useClientOnly";
import { DashboardNavBar } from "./DashboardNavbar";
import { DashboardSidebar } from "./DashboardSidebar";

interface props {
  children: React.ReactNode;
}

export const Layout: React.FC<props> = ({ children }) => {
  if (useClientOnly()) return null;

  return (
    <main className="lg:pl-[280px] pt-14 selection:text-sky-50 selection:bg-emerald-700 flex-c min-h-screen">
      <DashboardNavBar />
      {children}
      <DashboardSidebar />
    </main>
  );
};
