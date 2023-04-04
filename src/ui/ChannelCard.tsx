import Link from "next/link";
import React, { memo } from "react";
import { CaretRight } from "src/icons";
import { IChannel } from "src/types/ChannelType";
import { Badge } from "./Badge";
import { Row } from "./Row";

interface props extends IChannel {}

export const ChannelCard: React.FC<props> = memo(
  ({ access, id, name, desc }) => {
    return (
      <div className="p-4 m-3 rounded-md lg:p-6 group bg-dark-700 border-500">
        <Link href={`/channels/${id}`} className="group-hover:underline">
          <Row>
            <h4 title={name} className="line-clamp-1">
              {name}
            </h4>
            <CaretRight
              className="mr-2 transition-all duration-400 group-hover:mr-1"
              size={20}
            />
          </Row>
        </Link>
        <p
          title={desc}
          className="h-[72px] whitespace-pre-line line-clamp-3 mt-3 mb-6 overflow-hidden"
        >
          {desc}
        </p>
        <Row>
          <Badge
            size="sm"
            className="capitalize"
            type={
              access !== "private"
                ? access === "public"
                  ? "green"
                  : "default"
                : "yellow"
            }
          >
            {access}
          </Badge>
          <span className="text-sm">
            {new Date(id).toString().substring(4, 21)}
          </span>
        </Row>
      </div>
    );
  }
);
