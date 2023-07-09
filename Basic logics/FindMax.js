const numbers = [10, 15, 25, 120, 12, 35, 90, 78];

let max = numbers[0];

for (const number of numbers) {
  if (number > max) {
    max = number;
  }
}

console.log(max);
