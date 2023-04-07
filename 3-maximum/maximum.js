let numbers = [11, 8, 43, 27, 3, 36, 14];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] < max){
        max = numbers[i];
    }
}
console.log("Dizideki En buyuk Sayi" + max);