var reverseWords = function (s) {
    // 문자열을 배열로 바꾼다
    // 배열을 반복문을 돌려서 단어 단위로 거꾸로 돌린 문자열로 변환해서 result 배열에 추가해준다.
    // result 배열을 다시 문자열로 join해서 리턴한다

    let array = s.split(" ");
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let reverse = "";
        for (let m = array[i].length - 1; m >= 0; m--) {
            reverse += array[i].charAt(m);
        }
        result.push(reverse);
    }
    return result.join(" ");
};
