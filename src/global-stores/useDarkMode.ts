import create from "zustand";
import { combine } from "zustand/middleware";

const darkModeKey = "@dark";

export const useDarkMode = create(
  combine(
    {
      dark: localStorage.getItem("dark") === "true",
    },
    (set) => ({
      toggleDarkMode: ({ enable }: { enable: boolean }) => {
        localStorage.setItem(darkModeKey, enable + "");

        set({ dark: enable });
      },
    })
  )
);
