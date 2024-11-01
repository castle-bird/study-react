import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// 컴포넌트/페이지 관련 import
import Meta from "./global/Meta.jsx";
import GlobalStyle from "./global/GlobalStyle.jsx";
import App from "./App.jsx";

import { NotionContext } from "./context/NotionContext.jsx";

createRoot(document.getElementById("root")).render(
    <NotionContext>
        <BrowserRouter>
            <Meta />
            <GlobalStyle />

            <App />
        </BrowserRouter>
    </NotionContext>
);
