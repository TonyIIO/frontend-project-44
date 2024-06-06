/*export const NOD = (x = 0, y = 0) => {
    if (x === y) { 
      return x;
    };
    if (x > y) {
      for (let i = y; i = 0; i -= 1) {
        if (x, y % i === 0) {
          return console.log(i);
        } 
      }
    } else { 
        for (let i = x; i = 0; i -= 1) {
          if (x, y % i === 0) {
            return console.log(i);
        }
        }
      }
    };*/
    export const NOD = (n, m) => {
        if (m !== 0) {
          const k = n % m;
          return NOD(m, k);
        }
        return n;
      };