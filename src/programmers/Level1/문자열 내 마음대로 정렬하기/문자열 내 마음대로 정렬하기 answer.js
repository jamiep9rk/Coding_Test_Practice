function solution(strings, n) {
    // sort로 a[n]와 b[n]를 비교한다
    // 대소 구분에 따라 정렬 순서를 바꾼다
    // 두개가 같은 경우 전체의 정렬 순서를 비교해서 순서를 바꾼다

    let answer = strings.sort((a, b) => {
        if (a[n] > b[n]) {
            return 1;
        } else if (a[n] < b[n]) {
            return -1;
        } else if (a[n] === b[n]) {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            }
            return 0;
        }
    });

    return answer;
}
