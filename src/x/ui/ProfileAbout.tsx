import React from "react";
import { SolidLink } from "../icons";
import { kFormatter } from "../../lib/kFormatter";
import { TextParser } from "../modules/display/TextParser";
import { ApiPreloadLink } from "../shared-components/ApiPreloadLink";
import { useTypeSafeTranslation } from "../shared-hooks/useTypeSafeTranslation";
import { UserBadgeLg, UserBadgeLgProps } from "./UserBadgeLg";

export interface ProfileAboutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  username: string;
  followers: number;
  following: number;
  description?: string;
  link?: string;
  tags: UserBadgeLgProps[];
}

export const ProfileAbout: React.FC<ProfileAboutProps> = ({
  username,
  followers,
  following,
  description,
  link,
  tags,
  className = "",
}) => {
  const { t } = useTypeSafeTranslation();
  return (
    <div
      className={`mt-2 bg-primary-800 p-4 rounded-8 w-full leading-8 ${className}`}
      style={{ maxWidth: 640 }}
    >
      <div className="pb-4 text-xl font-bold text-primary-100">
        {t("pages.viewUser.about")} {username} {t("pages.viewUser.aboutSuffix")}
      </div>
      <div className="flex mb-2">
        <div className="flex mr-4 group">
          <ApiPreloadLink route="followers" data={{ username }}>
            <span className="font-bold text-primary-100">
              {kFormatter(followers)}
            </span>
            <span className="ml-1 lowercase text-primary-300 group-hover:underline">
              {t("pages.viewUser.followers")}
            </span>
          </ApiPreloadLink>
        </div>
        <div className="flex group">
          <ApiPreloadLink route="following" data={{ username }}>
            <span className="font-bold text-primary-100">
              {kFormatter(following)}
            </span>
            <span className="ml-1 lowercase text-primary-300 group-hover:underline">
              {t("pages.viewUser.following")}
            </span>
          </ApiPreloadLink>
        </div>
      </div>
      <div className="pb-4 overflow-y-auto whitespace-pre-wrap text-primary-100 max-h-5l">
        {<TextParser>{description || ""}</TextParser>}
      </div>
      {link && (
        <div className="flex flex-row items-center mb-4">
          <SolidLink className="mr-2" />
          <a
            className="text-sm font-bold text-accent"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {link.replace(/(^\w+:|^)\/\//, "")}
          </a>
        </div>
      )}
      {tags.map((props: UserBadgeLgProps) => (
        <div key={props.icon} className="mb-1">
          <UserBadgeLg {...props} />
        </div>
      ))}
    </div>
  );
};
