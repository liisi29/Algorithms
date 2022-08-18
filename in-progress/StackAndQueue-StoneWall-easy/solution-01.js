// correctness 100%
// performance 33%
// total 57%
// time - about 30min
function solution(H) {
    let blocks = H.length;
    let high = []
    for (let i = 1; i < H.length; i++) {
        const prev = H[i-1];
        const cur = H[i];
        if (prev === cur) {
            blocks--;                                               
        } else if (cur > prev) { // higher            
            if (high.length === 0) {
                high.push(prev);
            }
            high.push(cur);
        } else if (cur < prev) {  // lower
            if (cur < high[0]) {
                high.length = 0;
                high.push(cur);
            } else {
                while(high.length > 0 && high[high.length - 1] > cur) {
                    high.pop();
                }
                if (high[high.length - 1] === cur) {
                    blocks--;
                }
            }
        }
    }
    return blocks;
}
// [1,4,5,67,3,4,6546,7,8,7]