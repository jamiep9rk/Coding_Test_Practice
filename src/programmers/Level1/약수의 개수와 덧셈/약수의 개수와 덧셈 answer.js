function divider(num) {
    let divideNum = 0;
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            divideNum = divideNum + 1;
        }
    }
    return divideNum;
}

function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (divider(i) % 2 === 0) {
            answer = answer + i;
        } else {
            answer = answer - i;
        }
    }
    return answer;
}
