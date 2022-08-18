// 100%
// time less than 10 min
// it was very easy

function solution(A) {
    const obj = A.reduce((p,c) => {
        if (p[c] === undefined) {
            p = Object.assign(p, {[c]: true});
        }
        return p;
    }, {});
    return Object.keys(obj).length;
}