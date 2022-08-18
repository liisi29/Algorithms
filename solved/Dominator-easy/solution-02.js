// correctness 62%
// performance 100%
// total 75%
// time: 28m
function solution(A) {
    if (A.length === 0) {
        return -1;
    }
    let j = A.length - 1;
    const len = A.length;
    const isEven = len%2 === 0;
    const half = Math.floor(len/2);
    let end = isEven ? half : half + 1;
    let max = 0;
    let maxIndex = 0;
    const obj = {};
    for (let i = 0; i < end + 1; i++) {
        add(i)     
        if (j > end) {
            add(j)
        }
        j--;
        if (max >= half + 1) {
            return maxIndex;
        }
    }
    return max >= half ? maxIndex : -1;
    function add(index) {
        const key = A[index];
        if (obj[key] === undefined) {
            obj[key] = 0;
        }
        obj[key]++;
        if (obj[key] > max) {
            max = obj[key];   
            maxIndex = index;
        }
    }
}
Analysis summary