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
                {isInModal && (
                    <>
                        <button
                            className={`${styles["light-box__image-slider"]} ${styles["light-box__image-slider__previous"]}`}
                            onClick={() =>
                                setImageIndex((prevImageIndex) =>
                                    prevImageIndex === 1
                                        ? prevImageIndex
                                        : prevImageIndex - 1,
                                )
                            }
                        >
                            <svg
                                width="12"
                                height="18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 1 3 9l8 8"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    fill="none"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </button>
                        <button
                            className={`${styles["light-box__image-slider"]} ${styles["light-box__image-slider__next"]}`}
                            onClick={() =>
                                setImageIndex((prevImageIndex) =>
                                    prevImageIndex === 4
                                        ? prevImageIndex
                                        : prevImageIndex + 1,
                                )
                            }
                        >
                            <svg
                                width="13"
                                height="18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="m2 1 8 8-8 8"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    fill="none"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </button>
                    </>
                )}
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
