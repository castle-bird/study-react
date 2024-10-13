import { useState, useMemo } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

export default function List({ todos, onUpdate, onDelete }) {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") return todos;

        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todos]);
    // 의존성 배열 : deps

    return (
        <div className="List">
            <h4>Todo List 🐝</h4>
            <div>
                <div>Total: {totalCount}</div>
                <div>Done Count: {doneCount}</div>
                <div>Not Done Count: {notDoneCount}</div>
            </div>
            <input
                value={search}
                placeholder="검색어를 입력하세요."
                onChange={onChangeSearch}
            />

            <div className="todos_wrapper">
                {filteredTodos.map((todo, idx) => {
                    return (
                        <TodoItem
                            key={idx}
                            {...todo}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                        />
                    );
                })}
            </div>
        </div>
    );
}
