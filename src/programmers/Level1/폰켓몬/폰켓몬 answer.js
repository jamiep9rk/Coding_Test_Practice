function solution(nums) {
    // type 배열에 겹치지 않는 새로운 종류들을 넣어준다
    // 선택할 수 있는 가짓수보다 작을 때까지 반복문을 돌려준다
    // type의 길이를 리턴한다
    let type = [];
    let choice = nums.length / 2;
    for (let i = 0; i < nums.length; i++) {
        if (type.length < choice) {
            if (!type.includes(nums[i])) {
                type.push(nums[i]);
            }
        }
    }
    return type.length;
}
