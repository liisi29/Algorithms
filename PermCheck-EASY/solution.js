// correctness 100%
// performance 100%
// time less than 10 min

function solution(A) {
    const arr = new Array(A.length + 1).fill(false);
    arr[0] = true;
    for(let i = 0; i < A.length; i++) {
        const cur = A[i];
        arr[cur] = true;
    }
    const result = arr.every((el) => el);
    return result ? 1 : 0;
}