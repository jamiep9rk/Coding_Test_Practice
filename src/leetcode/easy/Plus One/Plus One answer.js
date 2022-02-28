var plusOne = function (digits) {
    // 마지막 숫자가 9가 아니면 마지막 숫자에만 +1을 해준다
    // 마지막 숫자가 9일경우 반복문을 돌면서
    // 마지막 숫자가 9이거나 해당 인덱스 요소가 10일경우 그 자리수는 0으로 재선언하고 앞자리수에 +1을 해준다
    // 앞자리수가 없을경우 digits에 1을 unshift해준다

    let last = digits.length - 1;
    if (digits[last] !== 9) {
        digits[last] += 1;
    } else {
        for (let i = last; i >= 0; i--) {
            if (digits[last] === 9 || digits[i] === 10) {
                digits[i] = 0;
                if (digits[i - 1] === undefined) {
                    digits.unshift(1);
                } else {
                    digits[i - 1] += 1;
                }
            }
        }
    }
    return digits;
};
