function solution(arr) {
    let small = Math.min(...arr);
    arr.splice(arr.indexOf(small), 1);
    return arr.length === 0 ? [-1] : arr;
}
