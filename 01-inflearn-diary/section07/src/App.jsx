import { useState, useEffect, useRef } from "react";

import Viewer from "./components/Viewer";
import Controller from "./components/controller";
import Even from "./components/Even";
import "./App.css";

export default function App() {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState("");

    const isMount = useRef(false);

    // 1. 마운트   = 탄생
    useEffect(() => {
        console.log("마운트!");
    }, []);

    // 2. 업데이트 = 변화, 리렌더링
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log("업데이트!");
    });

    // 3. 언마운트 = 죽음


    const onClickButton = (value) => {
        setCounter(counter + value);
    };

    return (
        <>
            <Viewer counter={counter} />
            <section>
                <input
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
            </section>
            {counter % 2 === 0 ? <Even/> : ''}
            <Controller onClickButton={onClickButton} />
        </>
    );
}
