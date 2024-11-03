import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

// 노션 리듀서
const notionReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            // 새로고침시 모두 null로 변경해야해서 ...state사용 안함
            return {
                data: null,
                loading: true,
                error: null,
            };
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
        default:
            return state;
    }
};

// NotionContext 생성
export const Context = createContext();

// NotionProvider 정의
export const NotionContext = ({ children }) => {
    const [notionData, dispatch] = useReducer(notionReducer, {
        data: null,
        loading: false,
        error: null,
    });

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
        }
    };

    useEffect(() => {
        getNOTION();
    }, []);

    return <Context.Provider value={{ notionData, getNOTION }}>{children}</Context.Provider>;
};
