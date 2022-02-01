function solution(s) {
    // 문자열을 배열로 변환한다
    // 요소끼리 비교해서 sort 정렬한다
    // 정렬된 배열을 다시 문자열로 변환해서 리턴한다

    let array = Array.from(s);

    let answer = array.sort((a, b) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        }
        return 0;
    });

    return answer.join("");
}
