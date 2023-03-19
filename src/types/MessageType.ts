export interface MessageType {
  id: string;
  content: string;
  direction: "left" | "right";
  time: string;
}
