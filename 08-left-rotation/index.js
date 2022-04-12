function rotateLeft(d, arr) {
  // Write your code here
  const items = [...arr];
  const totalLength = arr.length;
  for (let i = 0; i < d; i++) {
    const item = items[0];
    items.splice(0, 1); // Delete index 0
    items.splice(totalLength, 0, item); // Add to the end
  }
  return items;
}

rotateLeft(4, [1, 2, 3, 4, 5]);
