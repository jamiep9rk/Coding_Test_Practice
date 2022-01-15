function solution(N, stages) {
    // 반복문을 돌면서 1부터 N까지 일치하는 수를 카운트해서 새 배열안에 넣는다
    // 다른 반복문을 돌면서 전체 통과한 사람/참가자수의 비율을 계산해 새 배열안에 넣는다
    // 비율을 계산한 새 배열을 내림차순으로 정렬한다
    // 요소의 순서를 뽑아서 리턴한다

    let current = Array(N).fill(0);
    for (let i = 0; i < stages.length; i++) {
        for (let k = 1; k <= N; k++) {
            if (stages[i] === k) {
                current[k - 1]++;
            }
        }
    }

    let percent = [];
    for (let i = 0; i < current.length; i++) {
        percent.push([i + 1, current[i] / stages.length]);
        stages.splice(0, current[i]);
    }
    percent.sort((a, b) => b[1] - a[1]);
    return percent.map((el) => el[0]);
}
