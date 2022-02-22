function solution(n) {
    // 반복문을 돌려서 0일때 0, 1일때 1을 리턴해준다
    // 2 이상일 때는 i - 1 + i - 2 값에 1234567을 나누어 나머지를 구해서 fibonacci 배열에 추가해준다

    let fibonacci = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) fibonacci.push(0);
        if (i === 1) fibonacci.push(1);
        if (i >= 2) {
            let sum = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(sum % 1234567);
        }
    }
    let result = fibonacci[n];
    return result;
}
