function solution(n) {
    // 수의 제곱근을 구한다
    // 제곱근이 1로 나누어 떨어질 경우 수 +1의 제곱을 리턴한다
    // 아닐 경우 -1을 리턴한다
    let number = Math.sqrt(n);
    if (number % 1 === 0) {
        return Math.pow(number + 1, 2);
    } else {
        return -1;
    }
}
