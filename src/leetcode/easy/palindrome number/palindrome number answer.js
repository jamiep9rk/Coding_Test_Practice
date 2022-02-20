var isPalindrome = function (x) {
    let string = "";
    let half = 0;
    if (x < 0) {
        string = String(Math.abs(x));
        half = Math.floor(string.length / 2);
    } else {
        string = String(x);
        half = Math.floor(string.length / 2);
    }

    for (let i = 0; i < half; i++) {
        if (string[i] === string[string.length - 1 - i]) {
            continue;
        } else if (string[i] === string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
