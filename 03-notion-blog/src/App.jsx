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

// 노션 리듀서
const notionReducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return {
                ...state,
                data: action.result,
                loading: false,
                error: null,
            };
        case "ERROR":
            return {
                ...state,
                data: null,
                loading: false,
                error: action.error,
            };
        case "LOADING":
            return {
                ...state,
                loading: true,
                error: null,
            };
        default:
            return state;
    }
};

const App = () => {
    const headerRef = useRef();
    const mainRef = useRef();
    const footerRef = useRef();
    const [notionData, dispatch] = useReducer(notionReducer, {
        data: null,
        loading: true,
        error: null,
    });

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

        const getNOTION = async () => {
            dispatch({ type: "LOADING" });

            try {
                const response = await axios.get(`/api/`);
                dispatch({
                    type: "SUCCESS",
                    result: response.data,
                });
            } catch (error) {
                dispatch({
                    type: "ERROR",
                    error: error.message,
                });

                console.log(error.message);
            }
        };

        getNOTION();
    }, []);

    return (
        <>
            <Header ref={headerRef} />

            <div className="main-container" ref={mainRef}>
                <Routes>
                    <Route path="/" element={<Home data={notionData} />} />
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
