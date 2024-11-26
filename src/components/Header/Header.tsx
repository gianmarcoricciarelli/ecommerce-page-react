import SneakersLogo from "../../../assets/images/logo.svg";
import { BasketAndLogo } from "./BasketAndLogo/BasketAndLogo";
import styles from "./Header.module.scss";
import { NavBar } from "./NavBar/NavBar";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles["header__logo-and-navbar-container"]}>
                <SneakersLogo />
                <NavBar />
            </div>
            <BasketAndLogo />
        </header>
    );
}
