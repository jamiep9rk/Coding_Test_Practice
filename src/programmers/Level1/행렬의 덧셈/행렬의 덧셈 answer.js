function solution(arr1, arr2) {
    // answer라는 arr1과 구조는 같지만 요소는 전부 0인 배열을 만들어준다
    // arr1을 돌면서 각 요소들을 answer에 넣어준다
    // arr2을 돌면서 전 answer에 더해준다

    const answer = new Array(arr1.length).fill([]).map((el) => new Array(arr1[0].length).fill(0));
    arr1.forEach((el, index) => {
        for (let i = 0; i < el.length; i++) {
            answer[index][i] = el[i];
        }
    });
    arr2.forEach((el, index) => {
        for (let i = 0; i < el.length; i++) {
            answer[index][i] += el[i];
        }
    });

    return answer;
}
