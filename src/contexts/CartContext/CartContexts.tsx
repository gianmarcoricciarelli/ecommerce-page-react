import React, { createContext, SetStateAction, useState } from "react";

export interface ICartContext {
    quantity: number;
    setQuantity: React.Dispatch<SetStateAction<number>>;
}

export const CartContext = createContext<ICartContext | null>(null);

interface ICartContextProvider {
    children: React.ReactNode;
}

export function CartContextProvider({ children }: ICartContextProvider) {
    const [quantity, setQuantity] = useState(0);

    return (
        <CartContext.Provider value={{ quantity, setQuantity }}>
            {children}
        </CartContext.Provider>
    );
}
