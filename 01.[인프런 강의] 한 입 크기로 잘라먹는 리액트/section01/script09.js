// 1. 함수 표현식
function funcA() {
    console.log("funcA");
}

let varA = funcA;
//varA();

let varB = function () {
    console.log('funcB')
}

//varB();

// 2. 화살표 함수
let varC = () => 1;

console.log(varC());