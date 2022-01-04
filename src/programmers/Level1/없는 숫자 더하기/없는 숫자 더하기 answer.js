function solution(numbers) {
    var answer = 0;

    //0부터 9까지의 새로운 배열을 만든다
    //numbers 배열을 돌면서 0부터 9까지의 숫자가 나오면 숫자 배열에서 해당 수를 뺀다
    //숫자 배열에 남은 수를 반복문을 돌려서 더해준다
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < numbers.length; i++) {
        const idx = list.indexOf(numbers[i]);
        list.splice(idx, 1);
    }
    for (let i = 0; i < list.length; i++) {
        answer = answer + list[i];
    }

    return answer;
}
