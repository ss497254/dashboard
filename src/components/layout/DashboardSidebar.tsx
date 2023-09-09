import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  ChatsIcon,
  DashboardIcon,
  MusicIcon,
  NotificationIcon,
  SettingsIcon,
  WarningIcon,
} from "src/icons";
import { useSidebarDrawerStore } from "src/stores/useSidebarDrawerStore";
import { useWindowSizeStore } from "src/stores/useWindowSizeStore";
import { Drawer } from "src/ui/Drawer";
import { Logo } from "src/ui/Logo";
import { NavItemGroup } from "src/ui/Sidebar/NavItemGroup";

const navGroups = [
  {
    heading: "Main",
    items: [
      {
        href: "/",
        icon: <DashboardIcon size={18} />,
        title: "Home",
      },
      {
        href: "/notifications",
        icon: <NotificationIcon size={18} />,
        title: "Notifications",
      },
    ],
  },
  {
    heading: "Chats",
    items: [
      { href: "/music", icon: <MusicIcon size={18} />, title: "Music" },
      { href: "/channels", icon: <ChatsIcon size={18} />, title: "Channels" },
    ],
  },
  {
    heading: "Manage",
    items: [
      { href: "/server", icon: <WarningIcon />, title: "Server" },
      {
        href: "/settings",
        icon: <SettingsIcon size={18} />,
        title: "Settings",
      },
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
      className="pb-10 overflow-y-scroll hide-scroll"
      permanent={width > 1024}
    >
      <Logo className="mx-auto my-8" />
      {navGroups.map((navGroup, idx) => (
        <NavItemGroup key={idx} {...navGroup} />
      ))}
    </Drawer>
  );
};
