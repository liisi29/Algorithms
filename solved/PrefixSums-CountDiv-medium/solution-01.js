// correctness 100%
// performance 100%
// total 100%
// time 34 min


function solution(A, B, K) {
    let firstDivisible;
    let add = 0;
    if (A === 0) {
        add++;
    }
    if (A < K || A === K) {
        firstDivisible = K;
    } else {
        const m = A % K;
        firstDivisible = m === 0 ? A : A + K - m; 
    }
    let lastDivisible;
    if (B < K) {
        return 0 + add;
    } else {
        const m = B % K;
        lastDivisible  = m === 0 ? B :  B - m;
    }
    const diff = lastDivisible-firstDivisible;
    return diff / K + 1 + add;
}

/** 
 * [0,10,1]
[0,1,1]
[0,0,1]
[1, 5, 3]
[3, 12, 3]
[4, 12, 3]
*/
