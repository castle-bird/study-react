// 간간한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
import { useState, useRef } from "react";

const style = { marginTop: "10px" };

const Resiter = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current)

        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const onsubmit = ()=>{
        if(input.name === ''){
            // 이름을 입력하는 DOM요소에 포커스
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <ul>
                <li style={style}>
                    <input
                        ref={inputRef}
                        value={input.name}
                        onChange={onChange}
                        name="name"
                        type="text"
                        placeholder={"이름"}
                    />
                    {input.name}
                </li>
                <li style={style}>
                    <input
                        value={input.birth}
                        name="birth"
                        onChange={onChange}
                        type="date"
                        placeholder={"생년월일"}
                    />
                    {input.birth}
                </li>
                <li style={style}>
                    <select
                        value={input.country}
                        onChange={onChange}
                        name="country"
                        id=""
                    >
                        <option value="">국적선택</option>
                        <option value="kr">한국</option>
                        <option value="us">미국</option>
                        <option value="uk">영국</option>
                    </select>
                    {input.country}
                </li>
                <li style={style}>
                    <textarea
                        name="bio"
                        value={input.bio}
                        onChange={onChange}
                        id=""
                    ></textarea>
                    {input.bio}
                </li>
            </ul>
            <button onClick={onsubmit}>제출</button>
        </div>
    );
};

export default Resiter;
