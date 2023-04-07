let numbers = [11, 8, 43, 27, 3, 36, 14];
numbers.sort(function(a, b) {
  return a - b;
});
let middleIndex = Math.floor(numbers.length / 2);
let middleElement = numbers[middleIndex];
console.log("Mod Eleman:" + middleElement);