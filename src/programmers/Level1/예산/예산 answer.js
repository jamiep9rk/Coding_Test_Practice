function solution(d, budget) {
    // d를 오름차순으로 정렬한다
    // 반복문으로 합이 budget 보다 같거나 작을 때까지 하나씩 더한다
    // 더 이상 더할 수 없을 때 요소의 갯수를 리턴한다

    let answer = 0;
    let total = 0;
    let applied = d.sort((a, b) => a - b);

    for (let i = 0; i < applied.length; i++) {
        if (total + applied[i] <= budget) {
            total = total + applied[i];
            answer++;
        }
    }
    return answer;
}
