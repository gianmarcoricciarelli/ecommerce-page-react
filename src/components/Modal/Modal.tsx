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
            className={styles["modal"]}
            style={{ opacity: modalOpacity }}
            onClick={onBackdropClickHandler}
        >
            <div className={styles["modal__content"]}>
                <LightBox isInModal />
            </div>
        </div>
    );
}
