import React from "react";
import { useSidebarDrawerStore } from "src/global-stores/useSidebarDrawerStore";
import { IconButton } from "src/ui/IconButton";

interface props {}

export const DashboardNavBar: React.FC<props> = () => {
  const { toggleOpen: toggleSidebar } = useSidebarDrawerStore();

  return (
    <div className="fixed top-0 z-50 flex items-center w-full px-4 font-semibold bg-dark-800 h-14">
      <IconButton
        icon="Hamburger"
        onClick={toggleSidebar}
        className="p-2.5 mr-4 rounded-md bg-dark-600 lg:hidden"
      />
      Dashboard
    </div>
  );
};
