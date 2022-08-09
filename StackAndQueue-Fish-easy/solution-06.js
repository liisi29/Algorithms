// 100%
// not my solution
function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
        let forceStack = [];
        let nrOfFish = B.length;
        for (let j = 0; j < B.length; j++) {
            const dir = B[j];
            const force = A[j];
            if (dir === 1) {
                forceStack.push(force);
            } else {
                while (forceStack.length > 0) {
                    const lastForceInStack = forceStack[forceStack.length - 1];
                    if (lastForceInStack > force) {
                        nrOfFish--;
                        break;
                    } else if (lastForceInStack < force) {
                        nrOfFish--;
                        forceStack.pop();
                    }
                }
            }
        }
        return c;
    }

    ////////////// mine
    // embarrasing
    function solution(A, B) {
        let alive = A.length;
        const ones = [];
        for (let i = 0; i < A.length; i++) {
            const currentDirection = B[i];
            const currentForce = A[i];
            if (currentDirection === 1) {
                ones.push(currentForce);
            } else {
                while(ones.length > 0) {
                    const lastOne = ones[ones.length - 1];
                    if (currentForce > lastOne) {
                        ones.pop();
                        alive--;
                    } else {
                        alive--;
                        break;
                    }
                }
               
            }
        }
        return alive;
    }