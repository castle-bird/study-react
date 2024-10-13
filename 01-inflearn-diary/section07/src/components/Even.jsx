import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        // 클린업, 정리함수
        return () => {
            console.log('언마운트...')
        };
    }, []);

    return <h1>짝수입니다.</h1>;
};

export default Even;