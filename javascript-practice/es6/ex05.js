/**
    Arrow Function
*/
const numbers = [1, 2, 3, 4, 5];

const power = function(x) {
    return x * x;
}

numbers.forEach(function(n) {
    process.stdout.write(`${n}: ${power(n)}\t`);
});

// ex01
console.log("\n--------\n");
numbers.forEach(function(n) {
    /*
    let result = (function(x) {
        return x * x;
    })(n);
    */
    // let result = ((x) => {return x * x})(n);

    let result = (x => x * x)(n); // 위에 코드들과 동일
    process.stdout.write(`${n}: ${result}\t`);
});

// ex02
console.log("\n--------\n");
numbers.forEach(function(n) {
    process.stdout.write(`${n}: ${(x => x * x)(n)}\t`); // result자리에 코드 넣기
});

// ex03
console.log("\n--------\n");
numbers.forEach(n => process.stdout.write(`${n}: ${(x => x * x)(n)}\t`)); // function을 한줄로 줄이기

// ex04 여러행 함수
console.log("\n--------\n");
[5, 3, 15, 1045, 43, 92].forEach(e => {
    if(e % 5) {
        process.stdout.write(`${e}: ${(x => x * x)(e)}\t`);
    }
});

