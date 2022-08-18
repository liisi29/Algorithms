// correctness 100%
// performance 100%
// total 100%
// time 14 min

function solution(A) {
    let countZeros = 0;
    let countEncounters = 0;
    for (let i = 0; i < A.length; i++) {
        const cur = A[i];
        if (cur === 0) {
            countZeros++;
        } else {
            // allZerosGetOneEncounter
            countEncounters = countEncounters + countZeros;
        }
        if (countEncounters > 1000000000) {
            return -1;
        }
    }
    return countEncounters;
 }
 /*
 [0]
 [1]
 [0,1]
 [0,0,0,1,1,1]
 */