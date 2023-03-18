import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSidebarDrawerStore } from "src/global-stores/useSidebarDrawerStore";
import { useWindowSizeStore } from "src/global-stores/useWindowSizeStore";
import {
  Compass,
  Home,
  Messages,
  Notification,
  Settings,
  User,
  Warning,
} from "src/icons";
import { Drawer } from "src/ui/Drawer";
import { Logo } from "src/ui/Logo";
import { NavItem } from "src/ui/Sidebar/NavItem";
import { NavItemGroup } from "src/ui/Sidebar/NavItemGroup";

const navGroups = [
  {
    heading: "Main",
    items: [
      { href: "/", icon: <Home size={18} />, title: "Home" },
      {
        href: "/notifications",
        icon: <Notification />,
        title: "Notifications",
      },
    ],
  },
  {
    heading: "Messages",
    items: [
      { href: "/messages", icon: <Messages />, title: "Messages" },
      { href: "/channels", icon: <Compass />, title: "Channels" },
    ],
  },
  {
    heading: "Manage",
    items: [
      { href: "/profile", icon: <User />, title: "Profile" },
      { href: "/server", icon: <Warning />, title: "Server" },
      { href: "/settings", icon: <Settings />, title: "Settings" },
    ],
  },
];

interface props {}

export const DashboardSidebar: React.FC<props> = ({}) => {
  const value = useSidebarDrawerStore();
  const router = useRouter();
  const { width } = useWindowSizeStore();

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (value.open) {
        value.toggleOpen();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  return (
    <Drawer
      {...value}
      className="pb-10 overflow-y-scroll md:overflow-y-hidden hover:overflow-y-scroll"
      permanent={width > 1200}
    >
      <Logo className="mx-auto mt-10 mb-6" />
      {navGroups.map((navGroup, idx) => (
        <NavItemGroup key={idx} {...navGroup} />
      ))}
    </Drawer>
  );
};
