import { Deque } from '../index.js';

function palindromeChecker(aString) {
  if (aString == null || (aString !== null && aString.length === 0))
    return false;

  const deque = new Deque();

  const lowerString = aString.toLowerCase().split(' ').join('');
  let isEqual = true;
  let firstChar, lastChar;

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

const result = palindromeChecker('1 6 1');
console.log(result);
