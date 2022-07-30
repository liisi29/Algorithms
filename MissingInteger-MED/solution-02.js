// correctness 40%
// performance 100%
// total 66%
// time 21 min

function solution(A) {
    A.sort((a, b) => a - b);
    let pos = false;
    let onlyPositives = false;
    for(let i = 0; i < A.length; i++) {
        const cur = A[i];
        const n = A[i+1];
        const sameNr = cur === n;
        if (cur === 0 && !sameNr) {
            if (n > 1) {
                return 1;
            }
        }
        if (cur > 0) {
            if (pos === false) { 
                onlyPositives = i === 0;               
                if (cur > 1) {
                    return cur-1;
                }
                pos = true; 
            }
            
            if (!sameNr && cur + 1 !== n) {
                return onlyPositives ? A[0] - 1 === 0 ? cur + 1 : A[0] - 1 : cur + 1;
            }
        }
    }
    return 1;
}

/*
[-1, 5]
[-1, 0, 5]
[0, 1000]
[1000, 1001]
[999999, 1000000]

[-1, 999998, 1000000]
[1, 999998, 1000000]
[ 999998, 1000000, 0]
[1000000, -1]
[1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 89, 1000000 ]
[1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 0, 1000000 ]
[1000000, 0]
[1]
[0]
[999999]

▶simple
simple test✘WRONG ANSWER
got 89 expected 1
1.0.072 sOK
2.0.072 sOK
3.0.072 sWRONG ANSWER, got 89 expected 1
▶extreme_min_max_value
minimal and maximal values✘WRONG ANSWER
got 999999 expected 1
1.0.072 sWRONG ANSWER, got 999999 expected 1
2.0.072 sOK
▶positive_only
shuffled sequence of 0...100 and then 102...200✘WRONG ANSWER
got 99 expected 1



*/