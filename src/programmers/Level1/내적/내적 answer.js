function solution(a, b) {
    // 반복문을 돌려서 a의 i번쨰 요소와 b의 i번째 요소를 곱해서 answer에 더한다

    let answer = 0;
    for (let i = 0; i < a.length; i++) {
        answer = answer + a[i] * b[i];
    }
    return answer;
}
