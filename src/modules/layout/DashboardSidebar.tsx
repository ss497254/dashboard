import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSidebarDrawerStore } from "src/global-stores/useSidebarDrawerStore";
import { useWindowSizeStore } from "src/global-stores/useWindowSizeStore";
import {
  Home,
  Messages,
  Settings,
  User,
  Compass,
  Notification,
  Warning,
} from "src/icons";
import { Drawer } from "src/ui/Drawer";
import { Logo } from "src/ui/Logo";
import { NavItem } from "src/ui/Sidebar/NavItem";

const items = [
  { href: "/", icon: <Home size={18} />, title: "Home" },
  { href: "/channels", icon: <Compass />, title: "Channels" },
  { href: "/notifications", icon: <Notification />, title: "Notifications" },
  { href: "/messages", icon: <Messages />, title: "Messages" },
  { href: "/secrets", icon: <Warning />, title: "Secrets" },
  { href: "/profile", icon: <User />, title: "Profile" },
  { href: "/settings", icon: <Settings />, title: "Settings" },
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
    <Drawer {...value} permanent={width > 1200}>
      <Link href="/">
        <Logo className="mx-auto mt-10" />
      </Link>
      <div className="px-5 py-3 mx-4 my-6 text-lg font-semibold rounded-md bg-dark-700">
        Saurabh Singh
        <div className="text-sm font-medium text-dark-200">Godfather</div>
      </div>
      <div className="items-center flex-1 px-4 mb-10">
        {items.map((item, idx) => (
          <NavItem
            key={idx}
            active={item.href ? router.pathname === item.href : false}
            {...item}
          />
        ))}
      </div>
    </Drawer>
  );
};
