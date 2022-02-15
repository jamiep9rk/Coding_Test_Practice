function solution(x) {
    // x를 문자열로 바꾼다
    // 반복문을 돌려 모든 자릿수의 합을 구한다
    // 그 합이 x를 나눴을 때 나누어떨어지면 true 리턴, 아니면 false 리턴한다

    let string = String(x);
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        sum += Number(string[i]);
    }
    return x % sum === 0 ? true : false;
}
