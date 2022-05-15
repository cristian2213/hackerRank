function matchingStrings(strings, queries) {
  // Write your code here
  const result = [];
  const qLimit = queries.length;
  const strsLimit = strings.length;
  for (let i = 0; i < qLimit; i++) {
    result[i] = 0;
    for (let j = 0; j < strsLimit; j++) {
      if (queries[i] == strings[j]) {
        result[i] += 1;
      }
    }
  }
  return result;
}

const finalResul = matchingStrings(
  ['aba', 'baba', 'aba', 'xzxb'],
  ['aba', 'xzxb', 'ab']
);
// Expected Output [2,1,0]

console.log(finalResul);
