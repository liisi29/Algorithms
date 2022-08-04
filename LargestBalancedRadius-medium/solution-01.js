// 0%

function solution(X, Y, colors) {
    const redObj = {};
    const greenObj = {};
    let greenCount = 0;
    let redCount = 0;
    for (let i = 0; i < X.length; i++) {
        const x = Math.abs(X[i]);
        const y = Math.abs(Y[i]);
        if (colors[i] === "R") {
            redCount++;
            if (redObj[x] === undefined) {
                redObj[x] = [];
            }
            redObj[x].push(y);
        } else {
            greenCount++;
            if (greenObj[x] === undefined) {
                greenObj[x] = [];
            }
            greenObj[x].push(y);
        }    
    }
    let counter;
    if (greenCount < redCount) {
        counter = doWithSmaller({sObj: greenObj, sCount: greenCount, bObj: redObj, bCount: redCount})
    } else {
        counter = doWithSmaller({sObj: redObj, sCount: redCount, bObj: greenObj, bCount: greenCount})
    }
    
    return counter;

    function doWithSmaller({sObj, sCount, bObj, bCount}) {
        let counterDone = 0;
        let counterSmall = 0;
        let counterBig = 0;
        for (let j = 0; j < Math.max(sCount, bCount) + 1; j++) {
            const s = sObj[j];
            const b = bObj[j];
            const hasSm = s !== undefined;
            const hasBig = b !== undefined;
            let arrSm = [];
            let arrBig = [];
            if (hasSm) {
                arrSm = s.sort((a, b) => a - b);
            } 
            if (hasBig) {
                arrBig = b.sort((a, b) => a - b);
            } 
            for (let k = 0; k<arrSm.length; k++) {
                if (arrSm[k] === arrBig[k]) {
                    counterDone = counterDone + 2;
                } else {
                    counterSmall = arrSm.length - k+1;
                    counterBig = arrBig.length - k+1;
                }
            }            
            if (counterSmall === counterBig) {
                counterDone = counterDone + counterSmall + counterBig;
                counterBig = 0;
                counterSmall = 0;
            }
        }
        return counterDone;
    }
}


