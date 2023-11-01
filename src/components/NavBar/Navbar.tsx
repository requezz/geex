import styles from "./Navbar.module.scss";
import { navBarData } from "../../constants/navbarData/navBarData";

interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  return (
    <div className={styles.navbarContainer}>
      {navBarData.map((navbar, index) => {
        return (
          <ul key={index}>
            <li className={styles.navbarTitle}>{navbar.title}</li>
          </ul>
        );
      })}
    </div>
  );
};
