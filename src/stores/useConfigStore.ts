import { create } from "zustand";
import { IUser } from "src/types/IUser";

interface ConfigState {
  user: IUser | undefined;
  update: (key: keyof Omit<ConfigState, "update">, value: any) => void;
}

export const useConfigStore = create<ConfigState>()((set) => ({
  user: undefined,
  update: (key, value) => set({ [key]: value }),
}));
