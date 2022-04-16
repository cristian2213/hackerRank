/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const aTreeLoc = a;
  const oTreeLoc = b;
  const applesLanding = apples.map((apple) => aTreeLoc + apple);
  const orangesLanding = oranges.map((orange) => oTreeLoc + orange);

  let tApples = 0;
  let tOranges = 0;
  // Check apples
  for (let i = 0; i < applesLanding.length; i++) {
    if (applesLanding[i] >= s && applesLanding[i] <= t) tApples += 1;
  }
  // Check oranges
  for (let i = 0; i < orangesLanding.length; i++) {
    if (orangesLanding[i] <= t && orangesLanding[i] >= s) tOranges += 1;
  }

  console.log(tApples);
  console.log(tOranges);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
