import { ReactComponent as HomeIcon } from "../../assets/icons/HomeIcon.svg";
import { ReactComponent as WatchIcon } from "../../assets/icons/WatchIcon.svg";
import { ReactComponent as CommunityIcon } from "../../assets/icons/CommunityIcon.svg";
import React from "react";

export type SidebarItemDataProps = {
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  text: string;
};

export const sidebarItemData: SidebarItemDataProps[] = [
  { icon: HomeIcon, text: "Home" },
  { icon: WatchIcon, text: "Watch" },
  { icon: CommunityIcon, text: "Community" },
];
