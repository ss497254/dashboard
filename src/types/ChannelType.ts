export interface IChannel {
  id: number | string;
  name: string;
  desc: string;
  access: "private" | "public-read" | "public";
}
