function solution(participant, completion) {
    // participant, completion을 오름차순으로 정렬한다
    // participant의 요소가 completion에 없을 경우 리턴한다

    participant.sort();
    completion.sort();
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}
