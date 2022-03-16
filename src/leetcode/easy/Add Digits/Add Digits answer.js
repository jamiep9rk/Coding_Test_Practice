var addDigits = function (num) {
    // num의 길이가 1이 될 때까지 재귀를 돌린다
    // num을 반복문을 돌리면서 각 자리 수의 합을 구한다

    let sum = 0;
    let str = String(num);
    if (str.length === 1) {
        return num;
    }
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return addDigits(sum);
};
