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
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};


export const  getProgression = (progressionStep, progressionBase, progressionLength) => {
  const arrProgression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    arrProgression[i] = progressionBase + i * progressionStep;      
  }
  return arrProgression;
};