export interface IChannel {
  name: string;
  desc: string;
  access: "private" | "public-read" | "public";
  activeMember?: number;
}
