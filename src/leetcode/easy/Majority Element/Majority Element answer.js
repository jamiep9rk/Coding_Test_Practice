var majorityElement = function (nums) {
    // nums에서 가장 큰 수를 찾는다
    // 그 수의 요소 만큼 0을 가지고 있는 배열 하나를 만든다
    // nums를 반복문을 돌리면서 해당 인덱스에 1씩 더해준다
    // 반복문이 끝나면 배열에서 가장 높은 숫자를 가지고 있는 요소의 인덱스를 구해서 리턴한다

    let max = Math.max(...nums);

    let count = new Array(max + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] += 1;
    }
    let answer = Math.max(...count);
    return count.indexOf(answer);
};
