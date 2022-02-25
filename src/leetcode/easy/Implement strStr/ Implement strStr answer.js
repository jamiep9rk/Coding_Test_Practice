var strStr = function (haystack, needle) {
    // haystack을 반복문을 돌면서 needle의 첫번째 글자와 찾는 요소를 찾는다
    // 일치하면 그 인덱스부터 needle 글자수만큼 빼낸것과 needle과 일치하는지 비교한다
    // 일치하는 것이 없으면 -1 리턴, needle이 빈 문자열일 때는 0을 리턴한다

    if (needle.length === 0) {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (haystack.substring(i, i + needle.length) === needle) {
                return i;
            }
        }
    }
    return -1;
};
