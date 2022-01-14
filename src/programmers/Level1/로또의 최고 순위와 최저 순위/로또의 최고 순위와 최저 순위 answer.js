function solution(lottos, win_nums) {
    // lottos 배열에서 0의 갯수를 카운트한다
    // 0이 아닌 요소들만 새 배열로 필터링하고 오름차순으로 정렬한다
    // win_nums도 오름차순으로 정렬한다
    // 새 배열의 요소를 반복문으로 돌리면서 win_nums에 포함이 되어있으면 순위를 -1씩 해준다
    // lottos의 모든 요소가 0일 경우 [1,6]을 리턴한다
    // 반복문이 다 돌면 최소의 순위에서 0의 갯수를 빼서 최고의 순위를 계산해서 리턴한다

    let answer = [0, 7];
    let lottosSort = lottos.filter((el) => el !== 0).sort((a, b) => a - b);
    let percent = lottos.length - lottosSort.length;
    win_nums = win_nums.sort((a, b) => a - b);

    for (let i = 0; i < lottosSort.length; i++) {
        if (win_nums.includes(lottosSort[i])) {
            answer[1]--;
        }
    }
    if (percent === lottos.length) {
        answer = [1, 6];
    } else {
        answer[0] = answer[1] - percent;
    }
    return answer;
}
