// correctness 25%
// performance 25%
// total 25%
// time - about 1h
let ARRAY_A;
let ARRAY_B;
function solution(A, B) {
    ARRAY_A = A;
    ARRAY_B = B;
    const lastFishIndex = A.length - 1;
    const first1 = B.findIndex((i) => i === 1);
    if (first1 === -1) {
        return A.length;
    }
    let survivals = first1;
    return startChunk(first1, []);
    
    
    function startChunk(firstIndexOf1, packOf1) {  
        const left = getPredator1(firstIndexOf1, 1, packOf1); 
        let isLastRound = left.lastIndex === lastFishIndex; 
        if (isLastRound) {
            survivals = survivals + left.potentialSurvivals.length;
            return survivals;
        }
        const right = getPredator0(left.lastIndex+1, 0);
        isLastRound = right.lastIndex >= lastFishIndex;
        let winner = left.fighter > right.fighter ? 1 : 0;
        if (winner === 0) {
            survivals = survivals + right.potentialSurvivalCount;
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
}
function getPredator1(firstIndex, direction, packOf1 = []) {        
        let winner = ARRAY_A[firstIndex];
        let winnerIndex = firstIndex;
        if (packOf1.length > 0) {            
            winner = packOf1[packOf1.length-1];
            winnerIndex = -1;
        }        
        let i = firstIndex;
        while(ARRAY_B[i] === direction) {
            if (winner < ARRAY_A[i]) {
                winner = ARRAY_A[i];
                winnerIndex = i;
            } 
            i++;
        }
        let potentialSurvivals;
        if (winnerIndex === -1) {
            potentialSurvivals = packOf1;
        } else {
            potentialSurvivals = packOf1.concat(ARRAY_A.slice(firstIndex, winnerIndex+1));
        }
        return {fighter: winner, potentialSurvivals, lastIndex: i-1};
    }
    
    function getPredator0(firstIndex, direction) {   
        let winner = ARRAY_A[firstIndex];
        let winnerIndex = firstIndex;
        let i = firstIndex;
        while(ARRAY_B[i] === direction) {
            if (winner < ARRAY_A[i]) {
                winner = ARRAY_A[i];
                winnerIndex = i;
            }
            i++;
        }
        const lastIndex = i-1;
        return {fighter: winner, lastIndex, potentialSurvivalCount: lastIndex - winnerIndex + 1};
    }