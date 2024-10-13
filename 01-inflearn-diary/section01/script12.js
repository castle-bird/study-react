// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key : value
let person = {
    name: "홍길동",
    age: 29,
    hobby: "테니스",
    jop: "FE Developer",
    extra: {},
    10: 20,
    "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // 홍길동
let age = person["age"]; // 29

let property = 'hobby';
let hobby = person[property]; // 테니스

// 3.2 새로운 프로퍼티를 추가하는 법
person.jop = 'fe developer'
person['favoritFood'] = '마라탕';


// 3.3 프로퍼티를 수정하는 법
person.jop = 'educator'
person['favoritFood'] = '떡볶이';


// 3.4 프로퍼티를 삭제하는 법
delete person.jop;

//console.log(person)

// 3.5 프로퍼티의 존재 유무 확인 법 (in 연산자)
let result1 = 'name' in person;
let result2 = 'cat' in person;

console.log(result1);
console.log(result2);
