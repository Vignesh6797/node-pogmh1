function sumTwo(...args) {
  let sum = 0;
  console.log(...args);
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(sumTwo(2, 3, 4, 5, 6));
