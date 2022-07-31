// correctness 100%
// performance 100%
// total 100%
// time 6 min

function solution(S, P, Q) {
    const r = P.map((p, i) => {
        const str = S.substring(p, Q[i]+1);
        if (str.includes("A")) {
            return 1;
        }
        if (str.includes("C")) {
            return 2;
        }
        if (str.includes("G")) {
            return 3;
        }
        if (str.includes("T")) {
            return 4;
        }              
    })   
    return r;    
}