var removeElement = function (nums, val) {
    // nums를 반복문으로 돌린다
    // i번째 요소가 val과 같을 경우 그 요소를 잘라내고 i를 -1을 해준다

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i = -1;
        }
    }
};
