function solution(s, n) {
    // 소문자 알파벳이 담긴 문자열을 만든다
    // 대문자 알파벳이 담긴 문자열을 만든다
    // s 문자열을 반복문을 돌면서
    // i번째 요소가 공백일 경우 공백을 answer에 더해준다
    // i번째 요소가 small에 있을 경우 index를 구해서 n을 더해준 요소를 answer에 더해준다
    // i번째 요소가 big에 있을 경우 index를 구해서 n을 더해준 요소를 answer에 더해준다
    // 반복문을 다 돌면 answer를 리턴한다

    let small = "abcdefghijklmnopqrstuvwxyz";
    let big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let answer = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            answer = answer + " ";
        } else if (small.indexOf(s[i]) === -1) {
            let index = big.indexOf(s[i]);
            answer = answer + big[(index + n) % 26];
        } else {
            let index = small.indexOf(s[i]);
            answer = answer + small[(index + n) % 26];
        }
    }
    return answer;
}
