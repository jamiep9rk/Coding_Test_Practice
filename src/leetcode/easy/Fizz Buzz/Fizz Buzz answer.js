var fizzBuzz = function (n) {
    // 1부터 n까지 반복문을 돌리면서 15의 배수인 경우 'FizzBuzz'를 배열에 push한다
    // 3의 배수일 경우 'Fizz'를 배열에 push한다
    // 5의 배수일 경우 'Buzz'를 배열에 push한다
    // 위 세가지의 경우에 해당하지 않을 경우 그 숫자 자체를 배열에 push한다

    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(`${i}`);
        }
    }
    return result;
};
