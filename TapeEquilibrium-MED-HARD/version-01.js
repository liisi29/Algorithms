// correctness 71%
// performance 50%
// total 61%

function solution(A) {
    const a = A; // new Array(1000000).fill(1000); // A;

    const len = a.length;
    let sumX = a[0];
    let sumY = a[len - 1];
    let j = len - 1;
    
    for (let i = 0; i < j;) {
        const ni = i + 1;
        const nj = j - 1;
        const isLastStepForOne = ni === nj;
        const noMoreStepBothAllowed = i + 3 === j;
        const nextForX = a[ni];
        const nextForY = a[nj];
        const whenNextIsX = sumX + nextForX;
        const whenNextIsY = sumY + nextForY;        
        const diffWhenX = Math.abs(whenNextIsX - sumY);
        const diffWhenY = Math.abs(whenNextIsY - sumX);        
        let doX = diffWhenX < diffWhenY;
        const doY = diffWhenX > diffWhenY;
        let doBoth = !doX && !doY;
        if (noMoreStepBothAllowed && doBoth) {
           doBoth = false;
           doX = true; 
        }
        if (doX) {
            sumX += nextForX;
            i++;
        } else if (doY) {
            sumY += nextForY;
            j--;
        } else if (doBoth) {
            sumX += nextForX;
            i++;
            sumY += nextForY;
            j--;
        }
        if (isLastStepForOne) {
            break;
        }
    }
    return Math.abs(sumX - sumY);

}

// testid
/* [3, 4, 1, 4, 3]
[3, 4, 1, 1, 4, 3]
[-3, -4, -1, -4, -3]
[-3, -4, -1, -1, -4, -3]
[-3, -4, 3, 7, -1, 3, -4, 7, -3]
[1, 2, 3, 5, 0, 1, 2, 3, -5]
[1, 2, 3, 5, 1, 1, 2, 3, -5]
[1000, 1, 1, -1000]
[-5, 1, 1, 5]
[1000, -1000]*/