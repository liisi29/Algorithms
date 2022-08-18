// correctness 100%
// performance 100%
// total 100%
// time less than 10min

function solution(S) {
    if(S.length === 0) {
        return 1;
    }
    let open = "";
    for(let i = 0; i < S.length; i++) {
        const cur = S[i];
        if (isOpen(cur)) {
            open+=cur;
        } else {            
            if (isLegalToClose(cur)) {
                open = open.slice(0, -1);
            } else {
                return 0;
            }
        }
    }
    return open === "" ? 1 : 0;

    function isLegalToClose(cur) {
        const legalOpens = ["(", "{", "["];
        const legalCloses = [")", "}", "]"];
        const indexOfOpen = legalOpens.findIndex((e) => e === open.charAt(open.length - 1));
        const indexOfClose = legalCloses.findIndex((e) => e === cur);
        return indexOfOpen === indexOfClose;

    }
}
function isOpen (s) {
    const open = ["(", "{", "["];
    return open.some((p) => p === s);
}

//  10K+1 ('s followed by 10K )'s + )( + ()
// For example, for the input '{{{{' the solution returned a wrong answer (got 1 expected 0).