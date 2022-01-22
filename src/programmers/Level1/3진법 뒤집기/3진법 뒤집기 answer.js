// 3진법으로 변환하는 재귀함수를 생성한다
// n이 3보다 작을 경우 남은 수를 마지막 자리에 붙인다
// 그렇지 않을 경우 3으로 나눈 나머지를 문자열 뒤에 붙이고 다시 재귀함수를 돌린다
// 3진법인 수를 반복문을 돌린다
// 수의 자릿수에 따라 3제곱을 곱해준다

let threeAnswer = "";
function three(n) {
    if (n < 3) {
        threeAnswer = threeAnswer + String(n);
        return;
    } else {
        threeAnswer = threeAnswer + String(n % 3);
        three(parseInt(n / 3));
    }
}

function solution(n) {
    let result = 0;
    three(n);

    for (let m = 0; m < threeAnswer.length; m++) {
        result = result + threeAnswer[m] * Math.pow(3, threeAnswer.length - 1 - m);
    }
    return result;
}
