export interface INotification {
  content: string;
  type: "error" | "info";
  timestamp: Date;
  extra?: any;
}
