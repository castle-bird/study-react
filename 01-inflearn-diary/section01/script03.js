// 형변환 
// 1. 묵시적 형 변환 (엔진이 알아서)
let num = 10;
let str = '20';

const result = num + str;
//console.log(result); // 숫자 + 문자 ==> 숫자->문자로 변경

// 2. 명시적 형 변환 (개발자가 직접)
let str1 = '10';
let strToNum1 = Number(str1);

//console.log(10 + strToNum1);

let str2 = '10개'; // 숫자가 앞에 있어야 parseInt가 먹힘
let strToNum2 = parseInt(str2);

// console.log(10 + strToNum2);

let num1 = 20;
let numToStr1 = String(num1);

//console.log(numToStr1 + '입니다');

