function solution(x, n) {
    // answer라는 빈 배열을 만든다
    // 반복문을 돌려서 1부터 n까지 x씩 곱해서 answer 배열에 push한다

    let answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    return answer;
}
