import { useState } from "react";

import Viewer from "./components/Viewer";
import Controller from "./components/controller";
import "./App.css";

export default function App() {
    const [counter, setCounter] = useState(0);

    const onClickButton = (value) => {
        setCounter(counter + value)
    }

    return (
        <>
            <Viewer counter={counter} />
            <Controller onClickButton={onClickButton}  />
        </>
    );
}
