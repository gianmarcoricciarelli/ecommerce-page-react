import App from "./App.tsx";
import { CartContextProvider } from "./contexts/CartContext/CartContexts.tsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
    <CartContextProvider>
        <App />
    </CartContextProvider>,
);
