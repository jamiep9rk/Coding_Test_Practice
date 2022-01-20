function solution(s) {
    // 숫자 영어로 구성된 배열 하나를 만든다
    // 숫자 영어 처음 3글자로 구성된 다른 배열 하나를 만든다
    // s를 반복문으로 돌리면서 n번째가 문자열일 경우 (n, n + 3)을 구해서 숫자 index를 구한다
    // 글자를 인덱스에 해당하는 숫자로 변환해서 s를 재할당한다
    // 반복문을 다 돌면 s를 리턴한다

    let numWord = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let findIndex = ["zer", "one", "two", "thr", "fou", "fiv", "six", "sev", "eig", "nin"];

    for (let m = 0; m < s.length; m++) {
        if (typeof s.charAt(m) === "string") {
            let indexNum = findIndex.indexOf(s.substring(m, m + 3));
            let word = numWord[indexNum];
            s = s.replace(word, indexNum);
        }
    }

    return Number(s);
}
