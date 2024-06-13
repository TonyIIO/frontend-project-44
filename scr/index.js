export const NOD = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return NOD(m, k);
  }
  return n;
};

export const getRandomInt = (min, max) => {
  let mins = Math.ceil(min);
  let maxs = Math.floor(max);
  return Math.floor(Math.random() * (maxs - mins + 1)) + mins;
};

export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

export const getProgression = (progressionStep, progressionBase, progressionLength) => {
  const arrProgression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    arrProgression[i] = progressionBase + i * progressionStep;
  }
  return arrProgression;
};
