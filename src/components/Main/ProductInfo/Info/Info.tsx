import styles from "./Info.module.scss";

export function Info() {
    return (
        <div className={styles["info"]}>
            <p className={styles["info__description"]}>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </p>
            <div className={styles["info__price"]}>
                <div className={styles["info__price__discounted-price"]}>
                    <h1
                        className={
                            styles["info__price__discounted-price__price"]
                        }
                    >
                        $125.00
                    </h1>
                    <div
                        className={
                            styles[
                                "info__price__discounted-price__discount-badge"
                            ]
                        }
                    >
                        <span>50%</span>
                    </div>
                </div>
                <span className={styles["info__price__discount"]}>$250.00</span>
            </div>
        </div>
    );
}
