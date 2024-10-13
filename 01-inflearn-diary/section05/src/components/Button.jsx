const Button = ({ text, color = "black", children }) => {
    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(e.target)
        console.log(text);
    };

    return (
        <button onClick={onClickButton} style={{ color: color }}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

export default Button;
