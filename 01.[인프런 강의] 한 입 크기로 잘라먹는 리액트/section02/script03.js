// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3, 4];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, ...other] = arr;

// 2. 객체의 구조분해 할당

let person = {
    name: "홍길동",
    age: 28,
    hobby: "테니스",
    test: "테스트",
};

//let { name, age: myAge, ...other2 } = person;

// 3.객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, test}) => {
    console.log(name, age, hobby, test)
};

func(person);
