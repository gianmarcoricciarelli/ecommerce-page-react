import React, { createContext, SetStateAction, useState } from "react";

export interface ICartContext {
    setItemsInCart: React.Dispatch<SetStateAction<number>>;
}

export const CartContext = createContext<ICartContext | null>(null);

interface ICartContextProvider {
    children: React.ReactNode;
}

export function CartContextProvider({ children }: ICartContextProvider) {
    const [itemsInCart, setItemsInCart] = useState(0);

    return (
        <CartContext.Provider value={{ setItemsInCart }}>
            {children}
        </CartContext.Provider>
    );
}
