function solution(price, money, count) {
    // 반복문을 돌려서 count에 도달할때까지 price의 i배해서 총 값을 구해준다
    // 더한 값이 money보다 클 경우 차이를 리턴하고
    // money가 더 크거나 같을 경우는 0을 리턴한다

    let pay = 0;
    for (let i = 1; i <= count; i++) {
        pay = pay + price * i;
    }
    return pay > money ? pay - money : 0;
}
