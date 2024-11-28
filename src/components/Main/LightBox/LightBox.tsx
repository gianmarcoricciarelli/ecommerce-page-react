import {
    IModalContext,
    ModalContext,
} from "../../../contexts/ModalContext/ModalContext";
import styles from "./LightBox.module.scss";
import { Context, useContext, useState } from "react";

interface ILightBox {
    isInModal?: boolean;
}

export function LightBox({ isInModal }: ILightBox) {
    const { setIsModalOpen } = useContext(
        ModalContext as Context<IModalContext>,
    );

    const [imageIndex, setImageIndex] = useState(1);

    const onMainImageClickHandler = (
        event: React.MouseEvent<HTMLDivElement>,
    ) => {
        if (isInModal) {
            event.stopPropagation();
        }
        setIsModalOpen(true);
    };
    const onClickHandler = (
        event: React.MouseEvent<HTMLDivElement>,
        newImageIndex: number,
    ) => {
        if (isInModal) {
            event.stopPropagation();
        }
        setImageIndex(newImageIndex);
    };

    return (
        <div className={styles["light-box"]}>
            <div
                className={styles["light-box__main-image-container"]}
                onClick={onMainImageClickHandler}
            >
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
                            onClick={(event) =>
                                onClickHandler(event, imgIdx + 1)
                            }
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
