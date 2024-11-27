import styles from "./Title.module.scss";

export function Title() {
    return (
        <div className={styles["title"]}>
            <span className={styles["title__company"]}>SNEAKER COMPANY</span>
            <h1 className={styles["title__product-name"]}>
                Fall Limited Edition Sneakers
            </h1>
        </div>
    );
}
