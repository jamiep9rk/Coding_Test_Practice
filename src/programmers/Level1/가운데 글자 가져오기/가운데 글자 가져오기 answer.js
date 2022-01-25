function solution(s) {
    // 글자수가 짝수일 경우 인덱스 중간 두 글자를 리턴한다
    // 글자수가 홀수일 경우 인덱스 중간 한 글자만 리턴한다
    let letter = s.length;
    return letter % 2 === 0 ? s.substring(letter / 2 - 1, letter / 2 + 1) : s.charAt(Math.floor(letter / 2));
}
