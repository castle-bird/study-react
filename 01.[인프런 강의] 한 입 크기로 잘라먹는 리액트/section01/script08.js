// 함수선선
let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(10, 30);
console.log(area2);

// 호이스팅
// -> 끌어올림
function getArea(w, h) {
    function anoter() {
        console.log("another");
    }

    anoter();
    let area = w * h;

    return area;
}