import { LightBox } from "./LightBox/LightBox";
import styles from "./Main.module.scss";
import { ProductInfo } from "./ProductInfo/ProductInfo";

export function Main() {
    return (
        <main className={styles["product-content"]}>
            <LightBox />
            <ProductInfo />
        </main>
    );
}
