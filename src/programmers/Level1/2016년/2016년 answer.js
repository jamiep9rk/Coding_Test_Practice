function solution(a, b) {
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
