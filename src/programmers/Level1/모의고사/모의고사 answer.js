function solution(answers) {
    var answer = [];
    // 수포자들의 반복되는 규칙의 수를 배열로 저장
    let person1 = [1, 2, 3, 4, 5];
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    // filter를 사용하여 answers를 탐색하면서 수포자들의 번호와 비교(완전탐색)
    let score1 = answers.filter((a, i) => a === person1[i % 5]).length;
    let score2 = answers.filter((a, i) => a === person2[i % 8]).length;
    let score3 = answers.filter((a, i) => a === person3[i % 10]).length;
    // 세 사람의 점수 중 최대값 구하기
    let max = Math.max(score1, score2, score3);
    // 최대값과 일치한 점수를 가지면 answer에 저장
    if (score1 === max) answer.push(1);
    if (score2 === max) answer.push(2);
    if (score3 === max) answer.push(3);
    return answer;
}
