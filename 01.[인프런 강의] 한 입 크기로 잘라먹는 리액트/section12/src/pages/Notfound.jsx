import usePageTitle from "../hooks/usePageTitle";

const Notfound = ()=>{
    usePageTitle("페이지 없음");

    return (
        <div>잘못된 페이지 입니다.</div>
    )
}

export default Notfound;