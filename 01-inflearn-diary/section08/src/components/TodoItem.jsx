import "./TodoItem.css";

export default function TodoItem({
    id,
    isDone,
    content,
    date,
    onUpdate,
    onDelete,
}) {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDelete = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input
                type="checkbox"
                name=""
                id=""
                checked={isDone}
                onChange={onChangeCheckbox}
            />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    );
}
