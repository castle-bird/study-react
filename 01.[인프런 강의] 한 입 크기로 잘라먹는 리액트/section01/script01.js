// 1. 변수
let age;

age = 30;
//console.log(age);
 
// 2. 상수
const birth = "1997.01.07"; // 초기화 필수!
console.log(birth);

//birth = "123";
//console.log(birth);

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
// let 1name;
let name1;

// 3-3. 예약어 사용할 수 없다.
// let let
let _let;

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
