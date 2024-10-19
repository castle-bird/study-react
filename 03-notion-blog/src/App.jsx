import { Routes, Route } from "react-router-dom";
import { memo } from "react";

// 컴포넌트/페이지 관련 import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import WorkList from "./pages/WorkList";
import Notfound from "./pages/Notfound";

const App = memo(() => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/work-list" element={<WorkList />} />

                <Route path="*" element={<Notfound />} />
            </Routes>

            <Footer />
        </>
    );
});

App.displayName = "App";

export default App;
