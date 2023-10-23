const ITERATION_LIMIT = 20;

function calculateFibonacciSeries(iterationLimit = 20) {
  const fibonacciSeries = [0, 1, 1];

  for (let i = 3; i < iterationLimit; i++) {
    fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
  }

  return fibonacciSeries;
}

function calculateFibonacciSeries2(iterationLimit = 20) {
  const fibonacciSeries = [0, 1];

  for (let i = 0; i < iterationLimit; i++) {
    fibonacciSeries[fibonacciSeries.length] =
      fibonacciSeries[i] + fibonacciSeries[i + 1];
  }

  return fibonacciSeries;
}

console.log(
  "calculateFibonacciSeries:",
  calculateFibonacciSeries(ITERATION_LIMIT)
);
/*
calculateFibonacciSeries: [
    0,   1,    1,    2,    3,
    5,   8,   13,   21,   34,
   55,  89,  144,  233,  377,
  610, 987, 1597, 2584, 4181
]
*/

console.log(
  "calculateFibonacciSeries2:",
  calculateFibonacciSeries2(ITERATION_LIMIT)
);
/*
calculateFibonacciSeries2: [
     0,     1,    1,    2,    3,
     5,     8,   13,   21,   34,
    55,    89,  144,  233,  377,
   610,   987, 1597, 2584, 4181,
  6765, 10946
]
*/
