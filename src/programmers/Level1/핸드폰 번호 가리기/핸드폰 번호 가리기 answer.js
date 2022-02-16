function solution(phone_number) {
    // 반복문을 돌려서 phone_number - 4 만큼 answer 문자열에 *를 더해준다
    // 반복문이 끝나면 phone_number 끝 4자리를 붙여서 리턴한다
    let answer = "";
    for (let i = 0; i < phone_number.length - 4; i++) {
        answer += "*";
    }

    return answer + phone_number.slice(-4);
}
