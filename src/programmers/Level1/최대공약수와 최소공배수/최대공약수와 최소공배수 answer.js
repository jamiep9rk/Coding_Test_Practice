function solution(n, m) {
    let answer = [];
    let small = 1;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && m % i === 0) {
            small = i;
        }
    }
    answer.push(small);

    answer.push((m * n) / small);
    return answer;
}
