// 5가지의 배열 변형 메서드
// 1. filter()
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 반환
let arr1 = [
    { name: "홍길동1", hobby: "테니스" },
    { name: "홍길동2", hobby: "테니스" },
    { name: "홍길동3", hobby: "축구" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

//console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서 , 각각 콜백함수 실행, 그 결과 반환
let arr2 = [1, 2, 3];
let mapedArr = arr2.map((item) => item * 2);
// console.log(mapedArr);

let names = arr1.map((item) => item.name);
// console.log(names)

// 3. sort()
// 배열을 (백과)사전순으로 정렬하는 메서드
// 원본배열을 수정
let arr3 = [10, 3, 5, 4];
arr3.sort((a, b) => {
    if (a < b) {
        // b가 a앞에
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
});
//console.log(arr3);

// 4. toSorted()
let arr5 = [10, 3, 5, 4];
const sorted = arr5.toSorted((a, b) => {
    if (a > b) {
        // b가 a앞에
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});

console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
let arr6 = ['hi', 'i\'m', '홍길동'];
const joined = arr6.join(' ');

console.log(joined)