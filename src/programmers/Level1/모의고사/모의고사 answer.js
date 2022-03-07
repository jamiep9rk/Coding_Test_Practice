function solution(answers) {
    // 사람마다 반복되는 수의 규칙을 배열로 저장한다
    // answers를 필터링하면 규칙 배열과 비교하여 일치한 요소만 걸러내고 그 길이를 선언한다
    // 나온 각 사람의 점수를 비교하여 최대값을 알아내고 가장 많이 맞힌 사람을 리턴한다

    var answer = [];

    let person1 = [1, 2, 3, 4, 5];
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let score1 = answers.filter((a, i) => a === person1[i % 5]).length;
    let score2 = answers.filter((a, i) => a === person2[i % 8]).length;
    let score3 = answers.filter((a, i) => a === person3[i % 10]).length;

    let max = Math.max(score1, score2, score3);

    if (score1 === max) answer.push(1);
    if (score2 === max) answer.push(2);
    if (score3 === max) answer.push(3);
    return answer;
}
