import { useRouter } from "next/router";
import React from "react";
import { NavItem, NavItemProps } from "./NavItem";

interface props {
  heading: string;
  items: Omit<NavItemProps, "active">[];
}

export const NavItemGroup: React.FC<props> = ({ heading, items }) => {
  const router = useRouter();

  return (
    <div className="mx-4 mb-4 text-white">
      <div className="mx-4 mb-2 text-xs font-semibold uppercase text-dark-100">
        {heading}
      </div>
      {items.map((item, idx) => (
        <NavItem
          key={idx}
          active={item.href ? router.pathname === item.href : false}
          {...item}
        />
      ))}
    </div>
  );
};
