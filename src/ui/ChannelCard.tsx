import Link from "next/link";
import React, { memo } from "react";
import { CaretRightIcon } from "src/icons";
import { IChannel } from "src/types/ChannelType";
import { Badge } from "./Badge";
import { Row } from "./Row";

interface props extends IChannel {}

export const ChannelCard: React.FC<props> = memo(
  ({ access, name, desc, activeMember }) => {
    return (
      <Link href={`/channels/${name}`} className="m-3">
        <div className="p-4 rounded-md lg:p-6 group bg-dark-700 border-500">
          <Row>
            <h4 title={name} className="line-clamp-1 group-hover:underline">
              {name}
            </h4>
            <CaretRightIcon
              className="mr-2 transition-all duration-400 group-hover:mr-1"
              size={20}
            />
          </Row>
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
            <span>{activeMember ?? 0} active members</span>
          </Row>
        </div>
      </Link>
    );
  }
);
