function solution(absolutes, signs) {
    //sign을 반복문을 돌린다
    //true이면 absolutes의 n번째를 더하고 false이면 absolutes n번째를 뺀다
    //반복문이면 총 합값을 리턴한다
    let answer = 0;
    for (let i = 0; i < signs.length; i++) {
        if (signs[i] === true) {
            answer = answer + absolutes[i];
        } else {
            answer = answer - absolutes[i];
        }
    }
    return answer;
}
