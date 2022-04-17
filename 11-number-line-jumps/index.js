function kangaroo(x1, v1, x2, v2) {
  const limit = 100000; // total jumps
  let jK1 = x1; // jump
  let jK2 = x2;
  let answ = 'NO'; // default answer
  for (let i = 0; i < limit; i++) {
    jK1 += v1;
    jK2 += v2;
    if (jK1 === jK2) answ = 'YES';
  }
  return answ;
}

const res = kangaroo(0, 3, 4, 2); // YES
const res2 = kangaroo(0, 2, 5, 3); // NO
console.log(res);
console.log(res2);
