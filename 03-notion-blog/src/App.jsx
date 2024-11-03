import { Routes, Route } from "react-router-dom";
import { useEffect, useRef, useReducer } from "react";
import axios from "axios";

// 컴포넌트/페이지 관련 import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Publish from "./pages/workList/Publish";
import Front from "./pages/workList/Front";
import Notfound from "./pages/Notfound";

const App = () => {
    const headerRef = useRef();
    const mainRef = useRef();
    const footerRef = useRef();

    useEffect(() => {
        //main-container의 최소 높이 조절 (브라우저height - 헤더height - 푸터height)
        //최소 화면이 화면 꽉차게끔 하기 위함
        const mainHeight = () => {
            const headerH = headerRef.current ? headerRef.current.offsetHeight : 0;
            const footerH = footerRef.current ? footerRef.current.offsetHeight : 0;
            const windowH = window.innerHeight;

            if (mainRef.current) mainRef.current.style.minHeight = `${windowH - headerH - footerH}px`;
        };

        mainHeight();
        window.addEventListener("resize", mainHeight);
    }, []);

    return (
        <>
            <Header ref={headerRef} />

            <div
                className="main-container"
                ref={mainRef}
                style={{ paddingBottom: "3rem", position: "relative"}}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work-list/publish" element={<Publish />} />
                    <Route path="/work-list/front" element={<Front />} />

                    <Route path="*" element={<Notfound />} />
                </Routes>
            </div>

            <Footer ref={footerRef} />
        </>
    );
};

export default App;
