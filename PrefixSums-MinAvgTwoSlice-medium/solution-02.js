// correctness 60%
// performance 20%
// total 40%
// time 7 min

// one loop less, but still no performance
function solution(A) {   
    let mins = []
    for(let i = 0; i < A.length -1; i++) {
        mins.push(getSumsOfSlices(A.slice(i)))
    }
    const totalMin = Math.min(...mins);
    return mins.findIndex((m) => m === totalMin);
}
function getSumsOfSlices(a) {
    const n = a.length; 
    let R = (a[0]+a[1])/2;
    const P = [0];
    for(let k = 1; k < n + 1; k++) {
        P[k] = P[k - 1] + a[k - 1];
        if (k > 1) {
           R = Math.min(R,P[k]/P.length) 
        }
    }
    return R;
}