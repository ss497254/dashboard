import { StoreApi, UseBoundStore, create } from "zustand";
import { IMessage } from "src/types/IMessage";

export interface IMessageStore {
  newMessages: IMessage[];
  oldMessages: IMessage[];
  channel: string;
  isLoading: boolean;
  isSubmitting: boolean;
  addMessage: (content: string) => Promise<void>;
  loadOldMessages: () => Promise<void>;
  clearMessages: () => void;
}

const MessageStoreMap = new Map<
  string,
  UseBoundStore<StoreApi<IMessageStore>>
>();

export const getMessageStore = (channel: string) => {
  if (MessageStoreMap.has(channel)) return MessageStoreMap.get(channel)!;

  const store = create<IMessageStore>()((set) => ({
    newMessages: [],
    channel,
    oldMessages: [],
    isLoading: false,
    isSubmitting: false,

    addMessage: async (content) => {
      set({ isSubmitting: true });
      const newMessage: IMessage = {
        username: "ss497254",
        content,
        timestamp: new Date().toString(),
      };
      await new Promise((res) => setTimeout(res, 2000));
      set((state) => ({
        newMessages: [...state.newMessages, newMessage],
        isSubmitting: false,
      }));
    },

    loadOldMessages: async () => {
      set({ isLoading: true });
      await new Promise((res) => setTimeout(res, 2000));
      set({ isLoading: false });
    },

    clearMessages: () =>
      set({
        newMessages: [],
        oldMessages: [],
        isSubmitting: false,
        isLoading: false,
      }),
  }));

  MessageStoreMap.set(channel, store);

  return store;
};
