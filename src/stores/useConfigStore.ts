import { create } from "zustand";
import { IUser } from "src/types/IUser";

interface ConfigState {
  token: string;
  user: IUser | undefined;
  update: (key: keyof Omit<ConfigState, "update">, value: any) => void;
}

export const useConfigStore = create<ConfigState>()((set) => ({
  token: "",
  user: { username: "ss497254", admin: true, permissions: ["zonic", "music"] },
  // user: undefined,
  update: (key, value) => set({ [key]: value }),
}));
