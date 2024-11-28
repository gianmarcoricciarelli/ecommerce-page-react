import {
    IModalContext,
    ModalContext,
} from "../../contexts/ModalContext/ModalContext";
import { LightBox } from "../Main/LightBox/LightBox";
import styles from "./Modal.module.scss";
import { Context, useContext, useEffect, useState } from "react";

export function Modal() {
    const { setIsModalOpen } = useContext(
        ModalContext as Context<IModalContext>,
    );

    const [modalOpacity, setModalOpacity] = useState(0);

    const onBackdropClickHandler = () => {
        setModalOpacity(0);
        setTimeout(() => setIsModalOpen(false), 500);
    };

    useEffect(() => {
        setModalOpacity(1);
    }, []);

    return (
        <div
            className={styles["backdrop"]}
            style={{ opacity: modalOpacity }}
            onClick={onBackdropClickHandler}
        >
            <div className={styles["backdrop__modal"]}>
                <div className={styles["backdrop__modal__header"]}>
                    <svg
                        width="14"
                        height="15"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                            fill="var(--white)"
                            fillRule="evenodd"
                        />
                    </svg>
                </div>
                <LightBox isInModal />
            </div>
        </div>
    );
}
