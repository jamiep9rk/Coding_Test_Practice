var singleNumber = function (nums) {
    // 중복된 숫자를 넣어줄 repeat 배열을 만들어준다
    // nums를 반복문을 돌면서 repeat에 요소가 포함되어 있지 않으면 repeat에 push를 해준다
    // 포함되어 있으면 Repeat 배열에 들어져 있는 해당 요소를 지운다.
    // 반복문을 다 돌고 나면 repeat의 0번째 요소를 리턴한다.

    let repeat = [];
    for (let i = 0; i < nums.length; i++) {
        if (!repeat.includes(nums[i])) {
            repeat.push(nums[i]);
        } else {
            let index = repeat.indexOf(nums[i]);
            repeat.splice(index, 1);
        }
    }
    return repeat[0];
};
