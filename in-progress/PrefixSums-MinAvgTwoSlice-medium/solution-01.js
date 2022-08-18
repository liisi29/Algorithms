// correctness 80%
// performance 20%
// total 50%
// time 40 min
function solution(A) {
    let all = []
    for(let i = 0; i < A.length -1; i++) {
        all.push(getSumsOfSlices(A.slice(i)))
    }
    const mins = all.map((arr) => Math.min(...arr));
    const totalMin = Math.min(...mins);
    return mins.findIndex((m) => m === totalMin);
}
function getSumsOfSlices(a) {
    const n = a.length; 
    const R = [];
    const P = [0];
    for(let k = 1; k < n + 1; k++) {
        P[k] = P[k - 1] + a[k - 1];
        if (k > 1) {
            R.push(P[k]/P.length)
        }
    }
    return R;
}

/*I used this formula:
function solution(A) {
    const n = A.length; 
    const P = [0];
    for(let k = 1; k < n + 1; k++) { 
        P[k] = P[k - 1] + A[k - 1] // sums all elements in an array
    }
    console.log(P)
    return P
}*/