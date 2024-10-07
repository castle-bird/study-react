// 1. 콜백함수
function main(value) {
    value();
}

//main(() => console.log('i am sub'));

// 2. 콜백함수의 활용

function repeat(count, callback, num) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx, num);
    }
}

repeat(
    5,
    (idx, num) => {
        console.log(idx * num);
    },
    2
);
