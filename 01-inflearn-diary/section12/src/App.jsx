import "./App.css";
import {
    useReducer,
    useRef,
    createContext,
    useCallback,
    useEffect,
    useState,
} from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
// 1. '/' : 모든 일기를 조회하는 Home
// 2. '/new' : 새로운 일기를 작성하는 New 페이지
// 3. '/diary' : 일기를 상세히 조회하는 Diary 페이지
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

const reducer = (state, action) => {
    let nextState;

    switch (action.type) {
        case "INIT": {
            return action.data;
        }

        case "CREATE": {
            nextState = [action.data, ...state];
            break;
        }
        case "UPDATE": {
            nextState = state.map((item) =>
                String(item.id) === String(action.data.id) ? action.data : item
            );

            break;
        }

        case "NEGATIVE": {
            nextState = state.filter(
                (item) => String(item.id) !== String(action.id)
            );

            break;
        }

        default:
            return state;
    }

    localStorage.setItem("diary", JSON.stringify(nextState));

    return nextState;
};

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    useEffect(() => {
        const storedData = localStorage.getItem("diary");
        if (!storedData) {
            setIsLoading(false);
            return;
        }
        const parsedData = JSON.parse(storedData);

        if (!Array.isArray(parsedData)) {
            setIsLoading(false);
            return;
        }

        let maxId = 0;

        parsedData.forEach((item) => {
            if (Number(item.id) > maxId) {
                maxId = Number(item.id);
            }
        });

        idRef.current = maxId + 1;

        dispatch({
            type: "INIT",
            data: parsedData,
        });

        setIsLoading(false);
    }, []);

    // 일기 추가
    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    // 일기 수정
    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    // 일기 삭제
    const onDelete = (id) => {
        dispatch({
            type: "NEGATIVE",
            id,
        });
    };

    if(isLoading) {
        return <>로딩중입니다...!</>
    }

    return (
        <>
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider
                    value={{
                        onCreate,
                        onUpdate,
                        onDelete,
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/new" element={<New />} />
                        <Route path="/diary/:id" element={<Diary />} />
                        <Route path="/edit/:id" element={<Edit />} />

                        <Route path="*" element={<Notfound />} />
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
};

export default App;
