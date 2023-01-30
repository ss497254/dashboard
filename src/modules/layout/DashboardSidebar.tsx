import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSidebarDrawerStore } from "src/global-stores/useSidebarDrawerStore";
import { useWindowSizeStore } from "src/global-stores/useWindowSizeStore";
import { Home, Messages, Settings, User, Compass } from "src/icons";
import { Drawer } from "src/ui/Drawer";
import { Logo } from "src/ui/Logo";
import { NavItem } from "src/ui/Sidebar/NavItem";

const items = [
  { href: "/", icon: <Home size={18} />, title: "Home" },
  { href: "/messages", icon: <Messages />, title: "Messages" },
  { href: "/channels", icon: <Compass />, title: "Channels" },
  { href: "/settings", icon: <Settings />, title: "Settings" },
  { href: "/profile", icon: <User />, title: "Profile" },
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
      <div className="items-center w-full my-10 flex-c">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="items-center flex-1 px-4">
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
