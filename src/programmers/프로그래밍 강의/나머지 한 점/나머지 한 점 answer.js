function solution(v) {
    let answer = [];
    let width = [];
    let height = [];
    v.filter((el) => width.push(el[0]));
    v.filter((el) => height.push(el[1]));

    if (width[1] === width[0]) {
        answer.push(width[2]);
    } else if (width[1] === width[2]) {
        answer.push(width[0]);
    } else {
        answer.push(width[1]);
    }
    if (height[1] === height[0]) {
        answer.push(height[2]);
    } else if (height[1] === height[2]) {
        answer.push(height[0]);
    } else {
        answer.push(height[1]);
    }

    return answer;
}
