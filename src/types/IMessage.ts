export interface IMessage {
  content: string;
  username: string;
  timestamp: string;
  delivered?: boolean;
}
