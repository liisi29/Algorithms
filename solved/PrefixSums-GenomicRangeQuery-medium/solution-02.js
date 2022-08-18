// correctness 100%
// performance 0%
// total 62%%
// time 14 min

function solution(S, P, Q) {
    const r = P.map((p, i) => {
        const str = S.substring(p, Q[i]+1);
        const iterator = str[Symbol.iterator]();
        let min = 10;
        for(var j = 0; j < str.length; j++) {
            const {value} = iterator.next();
            if (value === "A") {
                return 1;
            }
            const val = makeNuclearNumbers(value);
            if (val < min) {
                min = val;
            }
        }
        return min; 
    })   
    return r;    
}

function makeNuclearNumbers(el) {
    switch(el) {
            case "A": return 1;
            case "C": return 2;
            case "G": return 3;
            case "T": return 4;
        } 
}