var findTheDifference = function (s, t) {
    // s와 t의 요소들을 배열로 넣고 알파벳 순으로 정렬한다
    // t 배열을 반복문을 돌리면서 s에 요소가 없을 경우 그 요소를 리턴한다

    let sSort = s.split("").sort();
    let tSort = t.split("").sort();
    for (let i = 0; i < tSort.length; i++) {
        if (tSort[i] !== sSort[i]) {
            return tSort[i];
        }
    }
};
