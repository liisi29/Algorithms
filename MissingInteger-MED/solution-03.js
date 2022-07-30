function solution(A) {
    const setOk = new Set();
    const set = new Set();
  
    let i = 1;
    A.forEach((cur) => {
        if (cur > 0) {
            set.add(cur);
            setOk.add(i);
            i++;
        }
    })    
    let result;
       
    setOk.forEach((v1, v2) => {
        if(result === undefined) {
            const isInSet = set.has(v2)        
            if (!isInSet) {
                result =  v2;
                return result;
            }
        }
    })
    if(result) {
        return result;
    }
    if (set.size === setOk.size) {
        return set.size+1;
    }

}