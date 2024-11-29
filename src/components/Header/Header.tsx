import SneakersLogo from "../../../assets/images/logo.svg";
import {
    IResizeObserverContext,
    ResizeObserverContext,
} from "../../contexts/ResizeObserverContext/ResizeObserverContext";
import { CartAndLogo } from "./CartAndLogo/CartAndLogo";
import styles from "./Header.module.scss";
import { NavBar } from "./NavBar/NavBar";
import { Context, useContext } from "react";

export function Header() {
    const { isMobile } = useContext(
        ResizeObserverContext as Context<IResizeObserverContext>,
    );

    return (
        <header className={styles.header}>
            <div className={styles["header__logo-and-navbar-container"]}>
                {isMobile && (
                    <svg
                        width="16"
                        height="15"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                            fill="#69707D"
                            fill-rule="evenodd"
                        />
                    </svg>
                )}
                <SneakersLogo />
                {!isMobile && <NavBar />}
            </div>
            <CartAndLogo />
        </header>
    );
}
