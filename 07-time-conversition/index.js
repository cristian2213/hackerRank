function timeConversion(s) {
  // Write your code here
  const [hours, minutes, seconds] = s.slice(0, -2).split(':');
  const period = s.slice(-2).toUpperCase();
  let hour24;

  if (period === 'PM') {
    hour24 = 12 + +hours;
    if (period === 'PM' && +hours === 12) {
      hour24 = '12';
    }
  }
  if (period === 'AM') {
    hour24 = hours;
    if (period === 'AM' && +hours === 12) {
      hour24 = '00';
    }
  }
  const format24 = `${hour24}:${minutes}:${seconds}`;
  return format24;
}

console.log(timeConversion('07:05:45PM')); // 19:05:45
