function solution(a, b) {
    // 월별로 일수를 나타내는 배열을 만들어준다
    // 반복문을 돌면서 해당 월의 일수를 date에 더해준다
    // 해당 월까지 반복문을 돌면 date 값을 리턴해준다
    let date = 0;
    let day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    let daysCount = [0, 30, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    for (let i = 1; i <= a; i++) {
        if (a === 1) {
            date = date + b - 1;
        } else if (a === i) {
            date = date + b;
        } else if (a !== i) {
            date = date + daysCount[i];
        }
    }
    return day[date % 7];
}
