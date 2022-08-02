// 0%

function solution(X, Y, colors) {
    const objGreen = {};
    const objRed = {};
    
    for (let i = 0; i < X.length; i++) {
        if (colors[i] === "R") {
            addToObj(objRed, i);
        } else {
            addToObj(objGreen, i);
        }
    }

    function addToObj(obj, i) {
        if (obj[X[i]] === undefined) {
            obj[X[i]] = [];
        }
        obj[X[i]].push(Y[i]);

    }
    console.log(objGreen, objRed)
}