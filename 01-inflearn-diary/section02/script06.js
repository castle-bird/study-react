// 6가지의 요소 조작 메서드

// 1. push
// 배열 맨뒤에 추가, 배열 갯수 반환
let arr1 = [1, 2, 3];
const newLength = arr1.push(4);

//console.log(newLength);

// 2. pop
// 배열 맨 뒤 삭제, 반환
let arr2 = [1, 2, 3];
let poppedItem = arr2.pop();

// 3. shift
// 배열의 맨 앞 삭제, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift
// 배열의 맨 앞에 추가
let arr4 = [1, 2, 3];
arr4.unshift(0);

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라서 반환
let arr5 = [1, 2, 3, 4, 5];
let slicedItem = arr5.slice(2, 3);
let slicedItem2 = arr5.slice(-3);

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열 반환
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr)
