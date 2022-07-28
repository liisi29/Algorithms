// correctness 100%
// performance 100%
// total 100%
function solution(A) {
    const totalSum = A.reduce((prev, cur) => prev= prev+cur , 0);
    let sumA = 0;
    let minDiff;
    for(let i = 0; i < A.length - 1; i++) {
        sumA = sumA + A[i];
        const sumB = totalSum - sumA;
        const dif = Math.abs(sumA-sumB);
        if (!minDiff) {
            minDiff = dif;
        } else {
            minDiff = Math.min(minDiff, dif);
        }
        if (minDiff === 0) {
            return 0;
        }
    }
    return minDiff;
}