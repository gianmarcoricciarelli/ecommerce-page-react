import { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.scss";

const NAVBAR_ITEMS = ["Collections", "Men", "Women", "About", "Contact"];

export function NavBar() {
    const [sliderLeft, setSliderLeft] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);

    const navBarItemsRefs = useRef<HTMLDivElement[]>([]);

    const onMouseEnterHandler = (elementIndex: number) => {
        setSliderWidth(navBarItemsRefs.current[elementIndex].clientWidth);
        setSliderLeft(navBarItemsRefs.current[elementIndex].offsetLeft);
    };

    useEffect(() => {
        if (navBarItemsRefs.current[0]) {
            setSliderWidth(navBarItemsRefs.current[0].clientWidth);
        }
    }, []);

    return (
        <nav className={styles["navbar"]}>
            {NAVBAR_ITEMS.map((item, index) => (
                <div
                    key={index}
                    className={styles["navbar__item"]}
                    ref={(element) => {
                        if (element) {
                            navBarItemsRefs.current[index] = element;
                        }
                    }}
                >
                    <span onMouseEnter={() => onMouseEnterHandler(index)}>
                        {item}
                    </span>
                </div>
            ))}
            <div
                className={styles["navbar__slider"]}
                style={{ left: sliderLeft, width: `${sliderWidth}px` }}
            />
        </nav>
    );
}
