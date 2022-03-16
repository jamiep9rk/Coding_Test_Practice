var missingNumber = function (nums) {
    let num = nums.length;
    for (let i = 0; i <= num; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
};
