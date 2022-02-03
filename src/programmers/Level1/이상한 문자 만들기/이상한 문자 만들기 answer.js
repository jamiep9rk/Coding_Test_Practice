// 테케는 통과했지만 제출 케이스는 하나도 통과하지 못한 코드
function solution(s) {
    let answer = "";
    let arr = s.split(" ");

    for (let i = 0; i < arr.length; i++) {
        let tmp = "";
        for (let m = 0; m < arr[i].length; m++) {
            if (m === arr[i].length - 1 && m % 2 === 0) {
                let letter = arr[i][m].toUpperCase();
                answer += letter + " ";
            } else if (m % 2 === 0) {
                let letter = arr[i][m].toUpperCase();
                answer += letter;
            } else if (m % 2 === 1) {
                answer += arr[i][m];
            }
        }
    }

    return answer.slice(0, -1);
}

// 참조해서 푼 코드
function solution(s) {
    let sp = s.split(" ");
    let answer = "";

    for (let i = 0; i < sp.length; i++) {
        var tmp = "";
        for (let j = 0; j < sp[i].length; j++) {
            if (j % 2 === 0) tmp += sp[i][j].toUpperCase();
            else tmp += sp[i][j].toLowerCase();
        }
        answer += tmp + " ";
    }
    return answer.slice(0, -1);
}

// 참조를 바탕으로 재구성한 첫번째 코드
function solution(s) {
    let answer = "";
    let arr = s.split(" ");

    for (let i = 0; i < arr.length; i++) {
        let tmp = "";
        for (let m = 0; m < arr[i].length; m++) {
            if (m % 2 === 0) {
                tmp += arr[i][m].toUpperCase();
            } else if (m % 2 === 1) {
                tmp += arr[i][m].toLowerCase();
            }
        }
        answer += tmp + " ";
    }

    return answer.slice(0, -1);
}
