
let sum = 0;

function average(){
    let numbers = [11, 8, 43, 27, 3, 36, 14];
 
    
    for (let i = 0; i <numbers.length; i++){
        sum += numbers [i];
    }
    let ortalama = sum / numbers.length;

console.log("Dizideki Sayilarin Ortalamasi" + ortalama);
document.getElementById("lblSonuc").innerHTML = "Ortalamanız : " + "<BR>" + ortalama;

}

average();


