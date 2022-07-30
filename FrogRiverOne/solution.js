function solution(X, A) {
    let obj = {};
    let counter = 0;
    for(let i = 0; i < A.length; i++) {
        const current = A[i];
        if (!obj[current]) {
            Object.assign(obj, {[current]: current});
            counter++;
        }
        if (counter === X) {
            return i;
        }
    }
    return -1;
}