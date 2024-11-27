import styles from "./Main.module.scss";

export function Main() {
    return (
        <main className={styles["product-content"]}>
            <p>Left section</p>
            <p>Right section</p>
        </main>
    );
}
