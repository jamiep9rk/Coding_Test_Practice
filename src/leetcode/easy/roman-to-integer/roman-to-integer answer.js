var romanToInt = function (s) {
    let count = 0;
    let valueArr = [
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ];
    for (let i = 0; i < s.length; i++) {
        for (let m = 0; m < valueArr.length; m++) {
            if (s[i] === valueArr[m][0]) {
                count += valueArr[m][1];
            }
        }
    }
    return count;
};
