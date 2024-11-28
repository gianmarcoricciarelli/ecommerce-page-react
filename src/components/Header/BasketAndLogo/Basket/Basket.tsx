import {
    CartContext,
    ICartContext,
} from "../../../../contexts/CartContext/CartContexts";
import styles from "./Basket.module.scss";
import React, {
    Context,
    SetStateAction,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

interface IBasket {
    setIsBasketVisible: React.Dispatch<SetStateAction<boolean>>;
}

export function Basket({ setIsBasketVisible }: IBasket) {
    const { itemsInCart, setItemsInCart } = useContext(
        CartContext as Context<ICartContext>,
    );

    const [basketOpacity, setBasketOpacity] = useState(0);

    const cartRef = useRef<HTMLDivElement>(null);

    const onCheckoutButtonClickHandler = () => {
        setBasketOpacity(0);
        setTimeout(() => setIsBasketVisible(false), 500);
    };

    useEffect(() => {
        const onClickOutside = (event: MouseEvent | TouchEvent) => {
            if (cartRef.current) {
                if (!cartRef.current.contains(event.target as Node)) {
                    setBasketOpacity(0);
                    setTimeout(() => setIsBasketVisible(false), 500);
                }
            }
        };

        document.addEventListener("mousedown", onClickOutside);

        setBasketOpacity(1);

        return () => {
            document.removeEventListener("mousedown", onClickOutside);
        };
    }, [setIsBasketVisible]);

    return (
        <div
            ref={cartRef}
            className={styles["basket"]}
            style={{ opacity: basketOpacity }}
        >
            <div className={styles["basket__header"]}>
                <span>Cart</span>
            </div>
            {itemsInCart > 0 ? (
                <div className={styles["basket__content"]}>
                    <div className={styles["basket__content__product"]}>
                        <div
                            className={
                                styles["basket__content__product__image"]
                            }
                        >
                            <img
                                src="assets/images/image-product-1-thumbnail.jpg"
                                alt="Product"
                            />
                        </div>
                        <div
                            className={
                                styles["basket__content__product__description"]
                            }
                        >
                            <span>Fall Limited Edition Sneakers</span>
                            <span>
                                {`$125 x ${itemsInCart}`}{" "}
                                <b>{`$ ${125 * itemsInCart}`}</b>
                            </span>
                        </div>
                        <svg
                            width="14"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            onClick={() => setItemsInCart(0)}
                        >
                            <defs>
                                <path
                                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                                    id="a"
                                />
                            </defs>
                            <use
                                fill="#C3CAD9"
                                fill-rule="nonzero"
                                xlinkHref="#a"
                            />
                        </svg>
                    </div>
                    <button onClick={onCheckoutButtonClickHandler}>
                        <span>Checkout</span>
                    </button>
                </div>
            ) : (
                <div className={styles["basket__empty"]}>
                    <span>Your cart is empty.</span>
                </div>
            )}
        </div>
    );
}
