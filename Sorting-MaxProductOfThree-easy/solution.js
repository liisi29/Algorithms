function solution(A) {
    // main idea: 
       // max_1 = positive * positive * positive
       // max_2 = negative * negative * positive
       // max = Math.max(max_1, max_1)
       // just need to sort the integer array
       
       // sort the array
       A.sort((a,b) => a-b);

       // max_1 = 1st biggest * 2nd biggest * 3rd biggest 
       const max_1 = A[A.length-1] * A[A.length-2] * A[A.length-3];
       
       // max_2 = 1st smallest * 2nd smallest * 1st biggest
       const max_2 = A[0] * A[1] * A[A.length-1];

       // take the maximum        
       return Math.max(max_1, max_2);
}