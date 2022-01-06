function solution(array, commands) {
    // commands를 forEach 반복문으로 돈다
    // 배열은 0번째부터 반복문으로 돌기 때문에 인덱스에서 -1을 해준다
    // sort를 사용해 배열을 정렬한다
    // 해당하는 값을 answer 배열에 넣어준다

    const answer = [];
    commands.forEach((el) => {
        const sliced = array.slice(el[0] - 1, el[1]).sort(function (a, b) {
            return a - b;
        });
        answer.push(sliced[el[2] - 1]);
    });
    return answer;
}
