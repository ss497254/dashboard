import Link from "next/link";
import React, { ReactNode } from "react";

export interface NavItemProps {
  href: string;
  icon: ReactNode;
  title: string;
  active: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  href,
  icon,
  title,
  active,
}) => {
  return (
    <Link href={href}>
      <div
        className={`flex items-center px-6 [&>svg]:mr-4 py-2.5 cursor-pointer w-full mb-2 transition font-medium duration-300 bg-white rounded-lg hover:text-green-400 hover:bg-opacity-10 ${
          active ? "bg-opacity-5 text-green-400" : "bg-opacity-0"
        }`}
      >
        {icon}
        {title}
      </div>
    </Link>
  );
};
