import styles from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Modal } from "./components/Modal/Modal";
import {
    IModalContext,
    ModalContext,
} from "./contexts/ModalContext/ModalContext";
import { Context, useContext } from "react";

function App() {
    const { isModalOpen } = useContext(ModalContext as Context<IModalContext>);

    return (
        <>
            <div className={styles["ecommerce-page"]}>
                <Header />
                <Main />
            </div>
            {isModalOpen && <Modal />}
        </>
    );
}

export default App;
