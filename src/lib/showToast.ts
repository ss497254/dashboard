import { useToastStore } from "src/stores/useToastStore";
import { IToast, ToastType } from "src/types/ToastType";

export const showToast = (
  data: Omit<IToast, "type" | "id">,
  type: ToastType
) => {
  useToastStore.getState().add({ type, ...data });
};
