import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

    usePageTitle(`${params.id}번 일기 수정`);

    const curDiaryItem = useDiary(params.id);

    const onClickDelete = () => {
        if (window.confirm("정말 삭제할까요? 다시 복구되지 않아요!")) {
            //일기 삭제
            onDelete(params.id);
            nav("/", { replace: true });
        }

        return;
    };

    const onSubmit = ({ createdDate, emotionId, content }) => {
        if (window.confirm("정말 수정하겠습니까?")) {
            onUpdate(params.id, createdDate.getTime(), emotionId, content);
        }

        nav("/", { replace: true });
    };

    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={
                    <Button
                        text={"< 뒤로가기"}
                        onClick={() => {
                            nav(-1);
                        }}
                    />
                }
                rightChild={
                    <Button
                        onClick={onClickDelete}
                        text={"삭제하기"}
                        type={"NEGATIVE"}
                    />
                }
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </div>
    );
};

export default Edit;
