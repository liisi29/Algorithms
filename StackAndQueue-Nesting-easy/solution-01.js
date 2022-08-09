// correctness 100%
// performance 100%
// total 10%
// time - less than 10m

// this was very easy after the total failure with counting angry fish

function solution(S) {
    let beginners = 0;
    for (let i = 0; i < S.length; i++) {
        const cur = S[i];
        if (cur === "(") {
            beginners++;
        } else {
            beginners--;
            if (beginners < 0) {
                return 0;
            }            
        }
    }
    return beginners === 0 ? 1 : 0;
}
/**
 * "(((("
"(()(("
")))))"
"()()()((()((()()))))()"
 */