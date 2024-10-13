// 1. 배열 순회
let arr = ["일", "이", "삼"];
// 1-1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

let arr2 = ["사", "오", "육", "칠", "팔"];
for (let i = 0; i < arr2.length; i++) {
    // console.log(arr2[i]);
}

// 1-2 for of 반복분 - 배열만
for (const item of arr) {
    // console.log(item);
}

// 2. 객체 순회
let person = {
    name: "홍길동",
    age: 27,
    hobby: "테니스",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값을만 뽑아서 새로운 배열 반환
let keys = Object.keys(person);

for (const key of keys) {
    //console.log(key, person[key])
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
// console.log(values)

for (const value of values) {
    // console.log(value);
}

// 2.3 for in
for (const key in person) {
    const value = person[key]

    console.log(key, value);
}