import React from "react";
import { useSidebarDrawerStore } from "src/global-stores/useSidebarDrawerStore";
import { IconButton } from "src/ui/IconButton";

interface props {}

export const DashboardNavBar: React.FC<props> = () => {
  const { toggleOpen: toggleSidebar } = useSidebarDrawerStore();

  return (
    <div className="flex items-center w-full px-4 font-semibold bg-dark-800 h-14">
      <IconButton
        icon="Hamburger"
        onClick={toggleSidebar}
        className="p-2.5 mr-4 rounded-md bg-dark-600 lg:hidden"
      />
      Dashboard
      <div className="flex-1" />
      <IconButton
        icon="Notification"
        className="p-2.5 rounded-full bg-dark-600"
      />
    </div>
  );
};
