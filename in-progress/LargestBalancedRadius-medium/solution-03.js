// correctness 86%
// performance 81%
// total 84%

function solution(X, Y, colors) {
    let tuple = []
      for (let i = 0; i< X.length; i++) {
        const a  = X[i];
        const b = Y[i];
        const c = colors[i];
        tuple.push([a*a+b*b, c])
      }  
      tuple.sort((a, b) => a[0] - b[0]);
      let counter = 0;      
      const temp = {
        R: 0,
        G: 0,
      };
      for(let j = 0; j < tuple.length; j++) {
        const cur = tuple[j][0];
        const color = tuple[j][1];
        const moreOnSquare = [
        getSum(tuple[j+1], cur), 
        getSum(tuple[j+2], cur), 
        getSum(tuple[j+3], cur)].reduce((p, c) => p+c, 0);
        if (moreOnSquare === 0) {
        	  temp[color]++;
        } else if (moreOnSquare === 1) {
            temp[color]++;
            temp[tuple[j+1][1]]++;
            j=j+1;
        } else if (moreOnSquare === 2) {
        		temp[color]++;
            temp[tuple[j+1][1]]++;
            temp[tuple[j+2][1]]++;
            j=j+2;
        } else {
            temp[color]++;
            temp[tuple[j+1][1]]++;
            temp[tuple[j+2][1]]++;
            temp[tuple[j+3][1]]++;
            j=j+3;
        }
        if (temp.R === temp.G) {
            counter = counter + temp.R * 2;
            temp.R = 0;
            temp.G = 0;
        }
       
      }
      return counter;
      
    }
    function getSum(el, cur) {
    	if (!!el) {
    		return el[0] === cur ? 1 : 0
    	} else {
    		return 0;
    }
    
    }
const t1 = solution([4,0,2,-2],[4,1,2,-3],"RGRR"); // 2
const t2 = solution([1,1,-1,-1],[1,-1,1,-1],"RGRG"); // 4
const t3 = solution([1,0,0],[0,1,-1],"GGR"); // 0
const t4 = solution([5,-5,5],[1,-1,-3],"GRG"); // 2 
const t5 = solution( 
  [3000, -3000, 4100, -4100, -3000],
  [5000, -5000, 4100, -4100,  5000],
  "RRGRG"); // 2 
    
 console.log(t1, t2, t3, t4, t5);


// Simple tests. N <= 5. ✘WRONG ANSWER got 4 expected 0
// big_compact Big tests where points are very close to the origin.✘WRONG ANSWER got 1168 expected 916