// correctness 100%
// performance 100%
// total 100%
// time: 28m. Not difficult at all.. Please, DO NOT BE SLOPPY!!!
function solution(A) {
    if (A.length === 0) {
        return -1;
    }
    let max = 0;
    let maxIndex = 0;    
    const half = Math.floor(A.length/2);
    const obj = {};
    for (let i = 0; i < A.length; i++) {
        add(i);
    }
    return max > half ? maxIndex : -1;
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