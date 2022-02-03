// 본 문제
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);
    for (let i = 0; i < b; i++) {
        let answer = "";
        for (let k = 0; k < a; k++) {
            answer = answer + "*";
        }
        console.log(answer);
    }
});

// 변형 문제 (계단식 별 찍기)
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = 5;
    for (let i = 0; i < a; i++) {
        let answer = "";
        answer = answer + "*";
        for (let m = 0; m < i; m++) {
            answer = answer + "*";
        }
        console.log(answer);
    }
});
