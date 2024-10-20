import { Routes, Route } from "react-router-dom";

// 컴포넌트/페이지 관련 import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Publish from "./pages/workList/Publish";
import Front from "./pages/workList/Front";
import Notfound from "./pages/Notfound";

const App = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/work-list/publish" element={<Publish />} />
                <Route path="/work-list/front" element={<Front />} />

                <Route path="*" element={<Notfound />} />
            </Routes>

            <Footer />
        </>
    );
};

export default App;
