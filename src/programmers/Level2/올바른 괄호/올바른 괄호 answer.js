function solution(s) {
    // (,)로 구성된 객체를 하나 선언한다
    // (가 나오면 stack에 넣어주고
    // )가 나오면 stack에서 (를 하나 뺀다
    // 다 돌았는데 stack의 길이가 0일경우 true, 그외의 경우는 false를 리턴한다

    const stack = [];
    const obj = {
        "(": ")",
    };

    for (let bracket of s) {
        let top = stack[stack.length - 1];
        if (obj[bracket]) {
            stack.push(bracket);
        } else {
            if (obj[top] === bracket) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}
