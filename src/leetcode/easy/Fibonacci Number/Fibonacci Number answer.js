var fib = function (n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        if (i <= 1) {
            arr.push(i);
        }
        if (i >= 2) {
            let sum = arr[i - 2] + arr[i - 1];
            arr.push(sum);
        }
    }
    return arr[n];
};
