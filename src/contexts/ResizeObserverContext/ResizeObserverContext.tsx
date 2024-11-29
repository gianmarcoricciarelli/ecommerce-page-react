import React, { createContext, useEffect, useState } from "react";

export interface IResizeObserverContext {
    isMobile: boolean;
}

export const ResizeObserverContext =
    createContext<IResizeObserverContext | null>(null);

interface IResizeObserverContextProvider {
    children: React.ReactNode;
}

const MOBILE_THRESHOLD = 375;

export function ResizeObserverContextProvider({
    children,
}: IResizeObserverContextProvider) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            const bodyWidth = entries[0].contentRect.width;

            if (bodyWidth <= MOBILE_THRESHOLD) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        });

        resizeObserver.observe(document.querySelector("body")!);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <ResizeObserverContext.Provider value={{ isMobile }}>
            {children}
        </ResizeObserverContext.Provider>
    );
}
