function solution(id_list, report, k) {
    // 정지되었다는 메일을 받는 횟수를 기록할 배열 warned 을 만들어준다
    // report는 띄어쓰기를 단위로 split 해서 읽기 쉽게 vote로 정리한다
    // id_list에 있는 사람의 이름이 key인 객체 voteList를 하나 만들어준다
    // vote를 반복문을 돌면서 신고받은 사람의 객체에 신고한 사람을 넣어준다(중복신고 경우 제외)
    // 반복물을 다 돌면 voteList를 돌면서 k와 같거나 보다 많은 신고를 받은 사람을 찾는다
    // 그 사람이 key인 객체에 있는 사람의 인덱스를 id_list에서 찾아서 warned 해당 인덱스에 1을 더한다

    let warned = new Array(id_list.length).fill(0);
    let vote = report.map((el) => el.split(" "));

    const voteList = {};
    id_list.map((user) => {
        voteList[user] = [];
    });

    for (let i = 0; i < vote.length; i++) {
        let voter = vote[i][0];
        let voted = vote[i][1];

        if (!voteList[voted].includes(voter)) {
            voteList[voted].push(voter);
        }
    }

    for (const voted in voteList) {
        if (voteList[voted].length >= k) {
            voteList[voted].map((el) => (warned[id_list.indexOf(el)] += 1));
        }
    }
    return warned;
}
