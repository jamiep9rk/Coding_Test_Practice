var twoSum = function (nums, target) {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        for (let m = i + 1; m < nums.length; m++) {
            if (nums[i] + nums[m] === target) {
                output.push(i, m);
            }
        }
    }
    return output;
};
