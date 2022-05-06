/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  let minium = scores[0];
  let maximum = scores[0];

  let max = 0;
  let min = 0;
  for (let i = 0; i < scores.length; i++) {
    if (i === 0) continue;

    if (scores[i] > maximum) {
      maximum = scores[i];
      max += 1;
      continue;
    }

    if (scores[i] < minium) {
      minium = scores[i];
      min += 1;
      continue;
    }
  }

  // index 0 most points records
  // index 1 least points records
  return [max, min];
}

const result = breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]); // 2 4
// const result = breakingRecords([3, 4, 21, 36, 10, 28, 35, 5 ,24 ,42]);
console.log(result);
