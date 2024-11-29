import App from "./App.tsx";
import { CartContextProvider } from "./contexts/CartContext/CartContexts.tsx";
import { ModalContextProvider } from "./contexts/ModalContext/ModalContext.tsx";
import { ResizeObserverContextProvider } from "./contexts/ResizeObserverContext/ResizeObserverContext.tsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
    <ResizeObserverContextProvider>
        <ModalContextProvider>
            <CartContextProvider>
                <App />
            </CartContextProvider>
        </ModalContextProvider>
    </ResizeObserverContextProvider>,
);
