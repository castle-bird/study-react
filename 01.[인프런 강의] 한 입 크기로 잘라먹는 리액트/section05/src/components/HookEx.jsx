import useInput from "../hooks/useInput";
// 3가지  Hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 못함
// 3. 나만의 훅(Custom Hook) 직접 만들 수 있음

const HookEx = () => {
    const [input, onChange] = useInput();

    return (
        <>
            <input value={input} onChange={onChange} />
            {input}
        </>
    );
};

export default HookEx;
