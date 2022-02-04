function solution(n) {
    let string = String(n);
    var answer = 0;
    for (let i = 0; i < string.length; i++) {
        answer += Number(string[i]);
    }

    return answer;
}
