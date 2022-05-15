function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let result = 0;
  let cachedIndex = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === i) continue;
      const sum = ar[i] + ar[j];
      if (sum % k === 0 && cachedIndex.has(`${i}-${j}`) == false) {
        result += 1;
        cachedIndex.add(`${i}-${j}`);
        cachedIndex.add(`${j}-${i}`);
      }
    }
  }
  return result;
}
const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];
//          0, 1, 2, 3, 4, 5
const finalResult = divisibleSumPairs(n, k, ar);
console.log(finalResult); // expected = 5
