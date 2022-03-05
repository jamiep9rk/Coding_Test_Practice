var maxProfit = function (prices) {
    // 주식을 사는 날을 prices[0]로 초기값으로, 팔아서 남는 이익을 profit을 0으로 초기값으로 선언한다
    // prices 반복문을 돌면서 buy보다 작은 값이 나타나면 그 요소를 buy로 재할당한다
    // buy보다 큰 값이 나타나면 두 수 사이의 차이를 profit과 비교해서 profit보다 클 경우 재할당한다
    // 반복문이 다 돌았을 때 profit 값이 0이면 0을 리턴, 아니면 profit 값을 리턴한다

    let buy = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (buy > prices[i]) {
            buy = prices[i];
        } else {
            if (prices[i] - buy > profit) {
                profit = prices[i] - buy;
            }
        }
    }
    return profit === 0 ? 0 : profit;
};
