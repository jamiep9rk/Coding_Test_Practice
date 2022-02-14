function solution(num) {
    // while 반복문을 돌린다
    // 입력된 수가 짝수라면 2로 나누고 count 1을 더해준다
    // 입력된 수가 홀수라면 3을 곱하고 1을 더하고 count 1을 더해준다
    // count가 500이 넘으면 -1을 리턴, 아니면 count를 리턴한다

    let count = 0;
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num / 2;
            count += 1;
        } else if (num % 2 === 1) {
            num = num * 3 + 1;
            count += 1;
        }
    }
    if (count < 500) {
        return count;
    } else {
        return -1;
    }
}
