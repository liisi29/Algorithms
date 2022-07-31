// correctness 100%
// performance 0%
// total 62%%
// time 20 min

// I actually like this solution.
// It is so short :)

function solution(S, P, Q) {
    const nn = makeNuclearNumbers(S);
    const r = P.map((p, i) => Math.min(...nn.slice(p, Q[i] + 1)));
    return r;
    
}

function makeNuclearNumbers(S) {
    return S.split("").map((el) => {
        switch(el) {
            case "A": return 1;
            case "C": return 2;
            case "G": return 3;
            case "T": return 4;
        } 
    })
}