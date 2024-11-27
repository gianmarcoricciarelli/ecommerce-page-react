import styles from "./Main.module.scss";
import { ProductInfo } from "./ProductInfo/ProductInfo";

export function Main() {
    return (
        <main className={styles["product-content"]}>
            <p>Left section</p>
            <ProductInfo />
        </main>
    );
}
