var lengthOfLastWord = function (s) {
    // letter 라는 단어들을 담아줄 새 배열을 선언한다
    // 하나의 단어를 넣어줄 word 문자열을 선언한다
    // s를 반복문을 돌면서 공백이면 넘긴다
    // 공백이 아닐 경우 다음 공백이 나올때까지 word 문자열에 더해주고 공백이 나오면 letter 배열에 push한다
    // 반복문의 끝자리가 문자열일 경우 word의 길이를 리턴한다
    // 반복문의 끝자리가 공백일 경우 letter 맨 마지막 단어의 길이를 리턴한다

    let letter = [];
    let word = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " " && word.length === 0) {
            continue;
        } else if (s[i] === " " && word.length !== 0) {
            letter.push(word);
            word = "";
            continue;
        } else if (i === s.length - 1 && s[i] !== " ") {
            word = word + s[i];
            return word.length;
        } else if (s[i] !== " ") {
            word = word + s[i];
        }
    }
    return letter[letter.length - 1].length;
};
