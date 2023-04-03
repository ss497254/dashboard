import Link from "next/link";
import React from "react";
import { Badge } from "./Badge";

interface props {
  id: number | string;
  name: string;
  desc: string;
  access: "private" | "public";
}

export const ChannelCard: React.FC<props> = ({ access, id, name, desc }) => {
  return (
    <Link href={`/channels/${id}`} className="m-3">
      <div className="p-4 rounded-md bg-dark-700 border-500">
        <h4>{name}</h4>
        <p className="h-24 mt-2 mb-6 overflow-hidden">{desc}</p>
        <div className="items-center justify-between f">
          <Badge
            size="sm"
            className="capitalize"
            type={access === "public" ? "green" : "default"}
          >
            {access}
          </Badge>
          <span className="text-sm">
            {new Date(id).toString().substring(4, 21)}
          </span>
        </div>
      </div>
    </Link>
  );
};
