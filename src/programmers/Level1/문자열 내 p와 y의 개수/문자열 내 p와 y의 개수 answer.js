function solution(s) {
    // pCount와 yCount를 0으로 선언한다
    // s를 반복문을 돌면서 p와 y의 개수를 카운트한다
    // p와 y의 개수가 같을 경우 true를 리턴, 다르면 false

    let pCount = 0;
    let yCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i).toUpperCase() === "P") {
            pCount++;
        } else if (s.charAt(i).toUpperCase() === "Y") {
            yCount++;
        }
    }
    if (pCount === yCount) {
        return true;
    }
    return false;
}
