import MergerQueueStack from "./deque";

function palindromeChecker(chain: string) {
  if (
    chain === null ||
    chain === undefined ||
    (chain !== null && chain.length === 0)
  )
    return null;

  const mergerQueueStack = new MergerQueueStack();
  const trimmedString = chain.toLowerCase().split(" ").join(""); // deletes spaces -> 'a a' => 'aa'
  const strLength = trimmedString.length;

  // Adds each letter to the MergerQueueStack class
  for (let i = 0; i < strLength; i++) {
    mergerQueueStack.addBack(trimmedString[i]);
  }

  let isEqual = true;

  // Size > 1 means that it can't execute again if the string is not even.
  while (mergerQueueStack.size() > 1 && isEqual) {
    const firstLetter = mergerQueueStack.removeFront();
    const lastLetter = mergerQueueStack.removeBack();

    if (firstLetter !== lastLetter) isEqual = false;
  }

  return isEqual;
}

console.log("a", palindromeChecker("a"));
console.log("aa", palindromeChecker("aa"));
console.log("kayak", palindromeChecker("kayak"));
console.log("level", palindromeChecker("level"));
console.log(
  "Was it a car or a cat I saw",
  palindromeChecker("Was it a car or a cat I saw")
);
console.log("Step on no pets", palindromeChecker("Step on no pets"));
