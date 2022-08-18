// correctness 0%
// performance 50%
// total 25%
// time - about 1h

let ARRAY_A;
let ARRAY_B;
let survivals = 0;
let potentialSurvivals = 0;

function solution(A, B) {
    ARRAY_A = A;
    ARRAY_B = B;
    const first1 = B.findIndex((i) => i === 1);
    if (first1 === -1) {
        return A.length;
    }
   survivals = first1;
   return doBattle(first1);
}

function doBattle(firstIndexOf1InChunk) {
    const chunk = makeChunk(firstIndexOf1InChunk, []);
    if (chunk === "end") {
        return survivals + potentialSurvivals;
    }
    const fighters = getFighter(chunk)
    fight(fighters);
    const currentChunkLastZero = chunk.zeros[1];
    if (currentChunkLastZero < ARRAY_B.length - 1) {
        return doBattle(currentChunkLastZero + 1);
    } else {
        return survivals + potentialSurvivals;
    }

}
function fight({oneFighter, zeroFighter}) {
    const winner = oneFighter.force > zeroFighter.force ? 1 : 0;
    if (winner === 0) {
        let additionalSurvivors = 0;
        for(let i = zeroFighter.firstFighter; i < zeroFighter.index + 1; i++) {
            if (ARRAY_A[i] > oneFighter.force) {
                additionalSurvivors++;
            }
        }
        survivals = survivals + zeroFighter.survivals + additionalSurvivors;
        potentialSurvivals = 0;
    } else {
        let additionalSurvivors = 0;
        for(let i = oneFighter.firstFighter; i > oneFighter.index; i--) {
            if (ARRAY_A[i] > zeroFighter.force) {
                additionalSurvivors++;
            }
        }
        potentialSurvivals = potentialSurvivals + oneFighter.survivals + additionalSurvivors;
    }    
}
function getFighter({
    ones, zeros,
}) {
    let oneFighter = {
        index: ones[0],
        force: ARRAY_A[ones[0]],
        dead: 0,
        survivals: 0,
        firstFighter: ones[1],
    };
    for(let i = ones[0]; i<=ones[1]; i++) {
        if (ARRAY_A[i] > oneFighter.force) {
            oneFighter.force = ARRAY_A[i];
            oneFighter.index = i;
        }
    }    
    oneFighter.survivals = oneFighter.index - ones[0];
    oneFighter.dead = ones[1] - oneFighter.index;
    let zeroFighter = {
        index: zeros[1],
        force: ARRAY_A[zeros[1]],
        firstFighter: zeros[0],
        dead: 0,
        survivals: 0,
    };
    for(let i = zeros[1]; i>=zeros[0]; i--) {
        if (ARRAY_A[i] > zeroFighter.force) {
            oneFighter.force = ARRAY_A[i];
            oneFighter.index = i;
        }
    }
    zeroFighter.survivals = zeros[1] - zeroFighter.index;
    zeroFighter.dead = zeroFighter.index - zeros[0];
    return {oneFighter, zeroFighter};
}
function makeChunk(first1) {
    const oneChunk = findChunkOf(first1, 1)    
    const ones = [first1, oneChunk.lastIndexOfChunk];
    if (oneChunk.firstOfOtherChunk === undefined) {
        const lastChunkOnes = oneChunk.lastIndexOfChunk - first1 + 1;
        survivals = survivals + lastChunkOnes + potentialSurvivals;
        return "end";
    }
    const zeroChunk = findChunkOf(oneChunk.firstOfOtherChunk, 0)
    const zeros = [oneChunk.firstOfOtherChunk, zeroChunk.lastIndexOfChunk];
    return {
        ones, zeros,
    }
}
function findChunkOf(firstIndexOfChunk, nr) {
    let lastIndexOfChunk = firstIndexOfChunk;
    let firstOfOtherChunk = false;
    let i = firstIndexOfChunk + 1;
    while(firstOfOtherChunk === false) {
        if (ARRAY_B[i] === nr) {
            lastIndexOfChunk = i;
        } else {
            firstOfOtherChunk = ARRAY_B[i] === undefined ? undefined : i;
        }
        i++;
    }
    return {firstOfOtherChunk, firstIndexOfChunk, lastIndexOfChunk};
}


// ([1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 0, 1, 1, 0, 0, 1, 1, 1])
// ([1, 2, 3, 6, 7, 5, 4, 8, 9], [0, 0, 0, 1, 1, 0, 0, 1, 1, 1])