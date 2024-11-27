import { Info } from "./Info/Info";
import styles from "./ProductInfo.module.scss";
import { Title } from "./Title/Title";

export function ProductInfo() {
    return (
        <div className={styles["product-info"]}>
            <Title />
            <Info />
        </div>
    );
}
