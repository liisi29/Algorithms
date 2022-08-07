// correctness 100%
// performance 20%
// total 60%
// time 25min

// jeei! correctness 100%! finally. had a stupid mistake
// but big O is still O(N ** 2)

function solution(A) {  
    let totalMinIndex = 0;
    let totalMin = null;
    for(let i = 0; i < A.length -1; i++) {
        let min = getSumsOfSlices(A.slice(i));
        if (i === 0) {
            totalMin = min;
        }
        if (min < totalMin) {
            totalMin = min;
            totalMinIndex = i;
        }        
    }
    return totalMinIndex;
}
function getSumsOfSlices(a) {
    const n = a.length; 
    let R = null;
    const P = [0];
    for(let k = 1; k < n + 1; k++) {
        P[k] = P[k - 1] + a[k - 1];
        if (k > 1) {
            const len = P.length -1;
            if (R === null) {
                R = P[k]/len;
            } else {
                R = Math.min(R,P[k]/len);
            }
        }
    }
    return R;
}