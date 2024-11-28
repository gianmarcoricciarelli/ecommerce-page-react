import styles from "./LightBox.module.scss";
import { useState } from "react";

export function LightBox() {
    const [imageIndex, setImageIndex] = useState(1);

    const onClickHandler = (newImageIndex: number) => {
        setImageIndex(newImageIndex);
    };

    return (
        <div className={styles["light-box"]}>
            <div className={styles["light-box__main-image-container"]}>
                <img
                    src={`assets/images/image-product-${imageIndex}.jpg`}
                    alt="Product image"
                />
            </div>
            <div className={styles["light-box__other-images-container"]}>
                {Array.from({ length: 4 }, (_, index) => index).map(
                    (imgIdx) => (
                        <div
                            key={imgIdx}
                            className={
                                styles[
                                    "light-box__other-images-container__other-image"
                                ]
                            }
                            onClick={() => onClickHandler(imgIdx + 1)}
                        >
                            <img
                                src={`assets/images/image-product-${imgIdx + 1}-thumbnail.jpg`}
                                alt="Thumbnail image"
                            />
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}
