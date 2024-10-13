// 5가지의 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach((item, idx, arr) => {
    //console.log(item, idx, arr);
});

let doubledArr = [];
arr1.forEach((item, idx) => {
    doubledArr.push(item * 2);
});
//console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

//console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환
// 객체를 못찾음
let arr3 = [1, 2, 3];
let index = arr3.indexOf(4);
//console.log(index);

// 4. findIndex
// 모든 요소를 순회, 콜백함수만족
// 특정요소의 인덱스 반환
// 객체를 찾음
let arr4 = [1, 2, 3, 2];
const findedIndex = arr4.findIndex((item) => item === 4);

// 5. find()
// 모든요소를 순회하면서 콜백함수를 만족하는 요소, 요소를 그대로 버ㅏㄴ환
let arr5 = [{ name: "홍길동1" }, { name: "홍길동2" }];

const finded = arr5.find((item) => item.name === "홍길동1");
console.log(finded)
