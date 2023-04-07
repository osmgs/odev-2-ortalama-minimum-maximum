let numbers = [11, 8, 43, 27, 3, 36, 14];
let oddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0){
        oddNumbers.push(numbers[i]);
    }
}
console.log("Dizideki Tek Sayilar" + oddNumbers);