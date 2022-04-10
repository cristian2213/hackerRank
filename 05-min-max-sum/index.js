function miniMaxSum(arr) {
  // Write your code here

  const min = Math.abs(Math.min(...arr));
  const max = Math.abs(Math.max(...arr));

  const totalSum = arr.reduce((preV, currV) => preV + currV);
  console.log(`${totalSum - max} ${totalSum - min}`);
}
