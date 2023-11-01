import React from "react";
import styles from "./SidebarList.module.scss";
import { classNames } from "../../../helpers/classNames/classNames";
import { sidebarItemData } from "../../../constants/sidebarItemData/sidebarItemData";
import { SidebarListItem } from "./SidebarListItem/SidebarListItem";

interface SidebarListProps {
  className?: string;
}

export const SidebarList = (props: SidebarListProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.SidebarList, {}, [className])}>
      {sidebarItemData.map((navItem) => {
        return <SidebarListItem navItem={navItem} />;
      })}
    </div>
  );
};
