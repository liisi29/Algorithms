// correctness 100%
// performance 33%
// total 69%

function solution(A) {
    const n = A.length - 1,
    midA = Math.floor(n/2),
    midB = midA+1;
    const meetIValue = A.length%2 === 0 ? midA : midA;
    const meetJValue = A.length%2 === 0 ? midA : midA-1;
    const a = [A[0]];
    const b = [A[n]];    
    let j = n;      
    let indexOfB = A.length%2 === 0 ? 0 : 1;  
    let indexOfA = A.length%2 === 0 ? midA+1-1 : midA+1 - 2;

    let min1;
    for(let i = 0; i < A.length; i++) {
        if (i > 0) {
            a.push(a[i - 1] + A[i])
        }        
        if (j < n) {
            b.unshift(b[0] + A[j])
        }        
        j--; 
        const weAreOnHalf = i === meetIValue && j === meetJValue;
        if(weAreOnHalf) {
        console.log(a, b)
        }
        
        if (a.length >= midA+1 && b.length >= midB) {
          if (!!b[indexOfB]) {
              const sum1 = Math.abs(a[a.length - 1] - b[indexOfB]);
              if (!min1) {
                min1 = sum1
              }
              if (sum1 < min1) {
                  min1 = sum1;
              }
              if (sum1 === 0) {
                  return 0;
              }                
              indexOfB = indexOfB+2;
           }
           if (!!a[indexOfA]) {
            const sum1 = Math.abs(a[indexOfA] - b[0]);
            if (!min1) {
                min1 = sum1
              }
             if (sum1 < min1) {
               min1 = sum1;
             }
             if (sum1 === 0) {
               return 0;
             }                
             indexOfA--;         
           }            
        }
        console.log(min1)
    }
        console.log(a, b)
    return min1;
}

//console.log(solution([1000, 1, 2, 3, 4, 5]))
console.log(solution([1000, 1, 2, 1000,  3, 4, 5, 6]))