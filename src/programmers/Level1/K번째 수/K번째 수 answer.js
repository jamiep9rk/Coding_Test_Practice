function solution(array, commands) {
    var answer = [];
    commands.forEach((el) => {
        const sliced = array.slice(el[0] - 1, el[1]).sort();
        answer.push(sliced[el[2] - 1]);
    });
    return answer;
}
