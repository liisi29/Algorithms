// correctness 80%
// performance 50%
// total 66%
// time 21 min

function solution(A) {
    let r = [true]
    for (let i = 0; i < A.length; i++) {
        const cur = A[i];
        if (cur > 0) {
            if (r[cur] === undefined) {
                const add = cur - r.length+1;
                r.splice(r.length+1, 0, ...new Array(add).fill(false));
            }
            r[cur] = true;
        }
    }
    const result = r.findIndex(el => !el);
    return result === -1 ? r.length : result;
}