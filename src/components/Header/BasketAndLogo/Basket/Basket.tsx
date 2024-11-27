import styles from "./Basket.module.scss";
import React, { SetStateAction, useEffect, useRef } from "react";

interface IBasket {
    basketOpacity: number;
    setBasketOpacity: React.Dispatch<SetStateAction<number>>;
}

export function Basket({ basketOpacity, setBasketOpacity }: IBasket) {
    const cartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClickOutside = (event: MouseEvent | TouchEvent) => {
            if (cartRef.current) {
                if (!cartRef.current.contains(event.target as Node)) {
                    setBasketOpacity(0);
                }
            }
        };

        document.addEventListener("mousedown", onClickOutside);

        return () => {
            document.removeEventListener("mousedown", onClickOutside);
        };
    }, [setBasketOpacity]);

    return (
        <div
            ref={cartRef}
            className={styles["basket"]}
            style={{ opacity: basketOpacity }}
        >
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                officiis omnis nihil quo at tempora debitis ipsa recusandae quam
                velit quia eos vero ducimus ipsam enim tempore aspernatur
                necessitatibus mollitia!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis beatae quia molestias atque neque reprehenderit nihil
                magni obcaecati vel. Aspernatur ut nulla voluptatibus reiciendis
                inventore odit non, eius quisquam similique!
            </p>
        </div>
    );
}
