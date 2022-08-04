// correctness 100%
// performance 100%
// time - quite a bit cause I was very sloppy
function solution(A) {
    if (A.length < 3) {
        return 0;
    }
    A.sort((a,b) => a-b);
    for(var i = 0; i< A.length-2; i++) {
        const a = A[i], b = A[i+1], c = A[i+2];
        const cond1 = a+b>c;
        const cond2 = a+c>b;
        const cond3 = c+b>a;
        if (cond1 && cond2 && cond3) {
            return 1;
        }
    }
    return  0;
}

//[5, 3, 3]