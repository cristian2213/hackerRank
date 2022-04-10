function birthdayCakeCandles(candles) {
  const maxHeight = Math.max(...candles);
  let counter = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxHeight) {
      counter++;
    }
  }

  return counter;
}
