const mybtn = document.getElementById("mybtn");
const mylabel = document.getElementById("mylabel");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");
const min  =1 ; 
const max = 100 ;

let randomNumber ;
let randomNumber2 ;
let randomNumber3 ;



mybtn.onclick = function() {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumber3 = Math.floor(Math.random() * (max - min + 1)) + min;
    mylabel.textContent = randomNumber;
    mylabel2.textContent = randomNumber2;
    mylabel3.textContent = randomNumber3;
}

