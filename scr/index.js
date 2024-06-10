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

     export const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
 
    export const isPrime = (num) => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num !== 1;
    };