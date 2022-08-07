function solution(A) {
    const n = A.length; 
    const P = [0];
    for(let k = 1; k < n + 1; k++) { 
        P[k] = P[k - 1] + A[k - 1] // sums all elements in an array
    }
    console.log(P)
    return P
}

solutions( [4, 2, 2, 5, 1, 5, 8])
//output
/*[ 0, 4 ] 1
[ 0, 4, 6 ] 2
[ 0, 4, 6, 8 ] 3
[ 0, 4, 6, 8, 13 ] 4
[ 0, 4, 6, 8, 13, 14 ] 5
[ 0, 4, 6, 8, 13, 14, 19 ] 6
[ 0, 4, 6, 8, 13, 14, 19, 27 ] 7
[ 0, 4, 6, 8, 13, 14, 19, 27 ]*/