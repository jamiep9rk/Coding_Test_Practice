function solution(sizes) {
    // sizes의 요소들을 반복문을 돌면서 오름차순으로 정리한다
    // 정렬된 배열을 필터링하면서 첫번째 요소들만 모아 first 배열에 넣는다
    // 정렬된 배열을 필터링하면서 두번째 요소들만 모아 second 배열에 넣는다
    // 각 배열의 최대값을 구해서 곱한 다음 리턴한다

    let first = [];
    let second = [];

    sizes.map((el) => el.sort((a, b) => a - b));
    sizes.filter((el) => first.push(el[0]));
    sizes.filter((el) => second.push(el[1]));

    return Math.max(...first) * Math.max(...second);
}
