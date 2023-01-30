import Link from "next/link";
import React, { ReactNode } from "react";

interface props {
  href: string;
  icon: ReactNode;
  title: string;
  active: boolean;
}

export const NavItem: React.FC<props> = ({ href, icon, title, active }) => {
  return (
    <Link href={href}>
      <div
        className={`flex items-center cursor-pointer w-full mb-2 transition font-medium duration-300 bg-white rounded-lg hover:text-green-400 hover:bg-opacity-5 ${
          active ? "bg-opacity-5 text-green-400" : "bg-opacity-0 text-dark-200"
        }`}
      >
        <div className="p-3 pl-5">{icon}</div>
        {title}
      </div>
    </Link>
  );
};
