function solution(a, b) {
    // a와 b가 같을 경우 a를 리턴한다
    // a가 b보다 클 경우 b부터 1씩 더하면서 i를 더해준다
    // b가 a보다 클 경우 a부터 1씩 더하면서 i를 더해준다
    // 반복문을 다 돌면 합을 리턴한다

    var answer = 0;

    if (a === b) {
        return a;
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            answer = answer + i;
        }
    } else {
        for (let i = a; i <= b; i++) {
            answer = answer + i;
        }
    }
    return answer;
}
