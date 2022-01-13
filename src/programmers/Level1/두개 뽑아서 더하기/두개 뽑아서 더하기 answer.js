function solution(numbers) {
    // 이중반복문을 돌려서 요소끼리 더한다
    // 요소의 순서가 같거나 이미 합이 있는 조합은 제외한다
    // 위의 조건에 부합하는 합은 새 배열에 넣어준다
    // 담긴 숫자들을 오름차순으로 정렬해서 리턴한다
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (i !== j && !answer.includes(numbers[i] + numbers[j])) {
                answer.push(numbers[i] + numbers[j]);
            }
            continue;
        }
    }
    return answer.sort((a, b) => a - b);
}
