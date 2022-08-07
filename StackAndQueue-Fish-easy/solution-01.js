// 0%

function solution(A, B) {
    const first1 = B.findIndex((i) => i === 1);
    if (first1 === -1) {
        return A.length;
    }
    let survivals = first1 - 1;
    return startChunk(first1, []);
    
    
    function startChunk(firstIndexOf1, packOf1) {    
        const left = getPredator(firstIndexOf1, 1, packOf1);   
        const right = getPredator(left.lastIndex+1, 0);
        const isLastRound = right.lastIndex >= A.length - 1;
        let winner = left.fighter > right.fighter ? 1 : 0;
        if (winner === 0) {
            survivals = right.countOfFish;
            if (isLastRound) {
                return survivals;
            } else {
                return startChunk(right.lastIndex+1);
            }            
        } else {
            if (isLastRound) {
                survivals = survivals + left.potentialSurvivals.length;
                return survivals;
            } else {
                return startChunk(right.lastIndex+1, left.potentialSurvivals);
            }            
        }
    }
    
    function getPredator(firstIndex, direction, packOf1 = []) {   
        let winner = A[firstIndex];
        let winnerIndex = firstIndex;
        if (packOf1.length > 0) {            
            winner = packOf1[packOf1.length-1];
            winnerIndex = -1;
        }        
        let i = firstIndex;
        while(B[i] === direction) {
            if (winner < A[i]) {
                winner = A[i];
                winnerIndex = i;
            }     
            i++;    
            
        }
        let potentialSurvivals;
        if (winnerIndex === -1) {
            potentialSurvivals = packOf1;
        } else {
            potentialSurvivals = packOf1.concat(A.slice(firstIndex, winnerIndex+1));
        }
        return {fighter: winner, potentialSurvivals, lastIndex: i, countOfFish: i - firstIndex};
    }
   
}