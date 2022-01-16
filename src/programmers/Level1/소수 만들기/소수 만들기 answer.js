// 소수 여부를 판별하는 함수를 생성한다
// 숫자 3개의 조합의 경우의 수를 3차 반복문을 써서 구한다
// 그 경우의 수의 합이 소수이면 answer를 1씩 더한다
// 반복문이 다 돌면 answer를 리턴한다

function prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(nums) {
    let answer = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let m = i + 1; m < nums.length - 1; m++) {
            for (let n = m + 1; n < nums.length; n++) {
                if (prime(nums[i] + nums[m] + nums[n])) {
                    answer++;
                }
            }
        }
    }
    return answer;
}
