function solution(n) {
    // 1부터 반복문을 돌려서 나머지가 1인 수가 나오면 그 숫자를 리턴한다

    for (let i = 0; i < n; i++) {
        if (n % i === 1) {
            return i;
        }
    }
}
