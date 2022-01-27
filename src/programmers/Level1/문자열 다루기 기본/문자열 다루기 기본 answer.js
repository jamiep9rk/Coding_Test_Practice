function solution(s) {
    // 나올 수 있는 숫자를 문자열의 형태로 바꿔서 배열을 하나 만든다
    // 문자열의 길이가 4이거나 6인 경우
    // 반복문을 돌면서 s의 i번째 요소가 글자인지 숫자인지 판별한다
    // 하나라도 글자라면 false를 리턴한다
    // 글자가 없이 반복문을 다 돌면 true를 리턴한다
    //위의 경우에 모두 해당하지 않을 경우 false를 리턴한다

    let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (s.length === 4 || s.length === 6) {
        for (let i = 0; i < s.length; i++) {
            if (!number.includes(s.charAt(i))) {
                return false;
            }
        }
        return true;
    }
    return false;
}
