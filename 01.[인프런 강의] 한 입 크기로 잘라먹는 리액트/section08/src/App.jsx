import { useState, useRef } from "react";
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

export default function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(mockData.length);

    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime(),
        };

        return setTodos([newTodo, ...todos]);
    };

    const onUpdate = (targetId) => {
        // todo State의 값들 중에
        // targetId와 일치하는 id를 갖는 todoItem의 isDone을 변경

        // 인수: todos배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
        setTodos(
            todos.map((todo) =>
                todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const onDelete = (targetId) => {
        // 인수: todos배열에서 targetId와 일치하는 id를 갖는 요소만 삭제
        setTodos(todos.filter((todo) => todo.id !== targetId));
    };

    return (
        <div className="App">
            <Header />
            <Editor onCreate={onCreate} />
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}
