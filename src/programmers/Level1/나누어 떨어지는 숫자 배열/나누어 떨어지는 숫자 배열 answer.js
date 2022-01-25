function solution(arr, divisor) {
    // arr의 i번째 요소를 반복문은 돌면서 divisor로 나눴을 때 나머지가 0인 것을 새 배열에 담는다
    // 새 배열의 길이가 0일 경우 [-1]을 리턴한다
    // 0이 아닐 경우 새 배열을 오름차순으로 정렬해서 리턴한다
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
