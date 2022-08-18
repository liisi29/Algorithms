// correctness 80%
// performance 20%
// total 40%
// time 7 min

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
            if (R === null) {
                R = P[k]/P.length;
            } else {
                R = Math.min(R,P[k]/P.length);
            }
        }
    }
    return R;
}

/*Detected time complexity:
O(N ** 2)
expand allExample tests
▶example
example test✔OK
expand allCorrectness tests
▶double_quadruple
two or four elements✔OK
▶simple1
simple test, the best slice has length 3✔OK
▶simple2
simple test, the best slice has length 3✔OK
▶small_random
random, length = 100✘WRONG ANSWER
got 15 expected 17
▶medium_range
increasing, decreasing (legth = ~100) and small functional✔OK
expand allPerformance tests
▶medium_random
random, N = ~700✔OK
▶large_ones
numbers from -1 to 1, N = ~100,000✘TIMEOUT ERROR
Killed. Hard limit reached: 6.000 sec.
▶large_random
random, N = ~100,000✘TIMEOUT ERROR
Killed. Hard limit reached: 6.000 sec.
▶extreme_values
all maximal values, N = ~100,000✘TIMEOUT ERROR
Killed. Hard limit reached: 6.000 sec.
▶large_sequence
many seqeneces, N = ~100,000✘TIMEOUT ERROR
Killed. Hard limit reached: 6.000 sec.*/