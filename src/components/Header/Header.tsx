import SneakersLogo from "../../../assets/images/logo.svg";
import { CartAndLogo } from "./CartAndLogo/CartAndLogo";
import styles from "./Header.module.scss";
import { NavBar } from "./NavBar/NavBar";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles["header__logo-and-navbar-container"]}>
                <SneakersLogo />
                <NavBar />
            </div>
            <CartAndLogo />
        </header>
    );
}
