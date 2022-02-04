function solution(n) {
    let answer = [];
    let string = String(n);
    for (let i = 0; i < string.length; i++) {
        answer.push(string[i]);
    }

    let order = answer.sort((a, b) => b - a);
    let result = order.join("");
    return Number(result);
}
