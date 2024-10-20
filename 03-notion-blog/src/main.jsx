import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// 컴포넌트/페이지 관련 import
import Meta from "./Meta.jsx";
import GlobalStyle from "./GlobalStyle.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Meta/>
        <GlobalStyle />

        <App />
    </BrowserRouter>
);
