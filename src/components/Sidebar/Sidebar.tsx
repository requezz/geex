import React from "react";
import styles from "./Sidebar.module.scss";
import { Notification } from "./Notification/Notification";
import { classNames } from "../../helpers/classNames/classNames";
import { Avatar } from "../UI/Avatar/Avatar";
import { SearchInputSidebar } from "./SearchInputSidebar/SearchInputSidebar";
import { avatars } from "../../assets/mockData/avatars/avatars";
import { SidebarList } from "./SidebarList/SidebarList";
import { Support } from "./Support/Support";

export const Sidebar = () => {
  return (
    <div className={classNames(styles.Sidebar, {}, [])}>
      <Notification />
      <Avatar
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvgIIA_HoEhnbowlFW7WX4iLjmYrfdymEt9Q&usqp=CAU"
        }
        alt={"Не удалось вывести изображение"}
        className={styles.avatarSidebar}
      />
      <SearchInputSidebar />
      <div className={styles.mainText}>MAIN</div>
      <SidebarList />

      <div className={styles.avatarStack}>
        {avatars.map((item) => {
          return <Avatar src={item.avatar} alt="" className={styles.avatar} />;
        })}
      </div>

      <div className={styles.orangeBlock}>2</div>
      <div className={styles.greenBlock}></div>

      <Support />
    </div>
  );
};
