var isPalindrome = function (x) {
    // 숫자를 문자열로 바꿔서 선언한다
    // 반복문을 문자열 길이의 반의 인덱스까지 돌린다
    // 앞과 뒤의 인덱스의 문자열을 비교하면서 같으면 true, 다르면 false를 리턴한다

    let string = String(x);
    let half = Math.floor(string.length / 2);

    for (let i = 0; i < half; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
