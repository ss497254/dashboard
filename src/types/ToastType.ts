export enum ToastType {
  success = "success",
  error = "error",
  info = "info",
  warning = "warning",
}

export interface IToast {
  id: number;
  duration: number;
  type: ToastType;
  message: string;
  desc?: string;
}
