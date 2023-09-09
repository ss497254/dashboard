import React from "react";
import { useSidebarDrawerStore } from "src/stores/useSidebarDrawerStore";
import { HamburgerIcon } from "src/icons";
import { IconButton } from "src/ui/IconButton";

interface props {}

export const DashboardNavBar: React.FC<props> = () => {
  const { toggleOpen: toggleSidebar } = useSidebarDrawerStore();

  return (
    <div className="fixed top-0 z-50 flex items-center w-full px-4 font-semibold bg-dark-800 h-14">
      <IconButton onClick={toggleSidebar} className="mr-4 lg:hidden">
        <HamburgerIcon />
      </IconButton>
      Dashboard
    </div>
  );
};
