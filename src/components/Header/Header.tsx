import styles from "./Header.module.scss";
import { classNames } from "../../helpers/classNames/classNames";
import { ReactComponent as ArrowIcon } from "../../assets/icons/ArrowLeftIcon.svg";
import { Icon } from "../UI/Icon/Icon";
import { Navbar } from "../NavBar/Navbar";

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;

  return (
    <header className={classNames(styles.Header, {}, [className])}>
      <div className={styles.headerText}>
        <Icon Svg={ArrowIcon} className={styles.arrowIcon} />
        Academy
      </div>

      <Navbar />
    </header>
  );
};
