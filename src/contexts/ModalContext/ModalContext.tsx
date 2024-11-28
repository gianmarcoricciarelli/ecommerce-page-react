import React, { createContext, SetStateAction, useState } from "react";

export interface IModalContext {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext | null>(null);

interface IModalContextProvider {
    children: React.ReactNode;
}

export function ModalContextProvider({ children }: IModalContextProvider) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
}
