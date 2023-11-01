import React, { useState } from "react";
import styles from "./SearchInputSidebar.module.scss";
import { classNames } from "../../../helpers/classNames/classNames";
import { Input } from "../../UI/Input/Input";
import { Icon } from "../../UI/Icon/Icon";
import { ReactComponent as SearchIcon } from "../../../assets/icons/SearchIcon.svg";

interface SearchInputSidebarProps {
  className?: string;
}

export const SearchInputSidebar = (props: SearchInputSidebarProps) => {
  const { className } = props;
  const [searchVideo, setSearchVideo] = useState<string>("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVideo(e.target.value);
  };

  return (
    <div className={classNames(styles.SearchInputSidebar, {}, [className])}>
      <Input
        value={searchVideo}
        placeholder=""
        onChange={handleSearchInputChange}
        className={styles.searchInput}
        disabled={true}
      />
      <Icon Svg={SearchIcon} className={styles.searchIcon} />
    </div>
  );
};
