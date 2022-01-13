function solution(arr) {
    // 반복문으로 arr의 i번째 요소를 확인한다
    // 전 순서의 요소와 같을 경우 그다음 반복문으로 넘어간다
    // 같지 않을 경우 새 배열에 넣어준다
    // 반복문을 다 돌면 새 배열을 리턴한다

    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            continue;
        }
        answer.push(arr[i]);
    }

    return answer;
}
