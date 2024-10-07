import { useRef, useReducer, useCallback } from "react";
import "./App.css";

import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        date: new Date().getTime(),
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "create":
            return [action.data, ...state];

        case "update":
            return state.map((itme) =>
                itme.id === action.targetId
                    ? { ...itme, isDone: !itme.isDone }
                    : itme
            );

        case "delete":
            return state.filter((todo) => todo.id !== action.targetId);
    }
};

const App = () => {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(mockData.length);

    const onCreate = useCallback((content) => {
        dispatch({
            type: "create",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime(),
            },
        });
    },[]);

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "update",
            targetId: targetId,
        });
    }, []);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "delete",
            targetId: targetId,
        });
    }, []);

    return (
        <div className="App">
            <Header />
            <Editor onCreate={onCreate} />
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
};

export default App;
