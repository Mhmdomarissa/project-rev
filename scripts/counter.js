// let fullname = "mohmmad alissa";
// let age = 22 ; 
// let student =false ; 
// document.getElementById("p1").textContent =  `your name is ${fullname}` ; 
// document.getElementById("p2").textContent = age ; 
// document.getElementById("p3").textContent = student ; 
//arithmetic operations 
// let students = 30 
// students %= 2
// console.log(students)
// let result = 2*1 + 2 + 4/12
// console.log( result)



// how to accept user input 
//first way
// let username  ; 
// username= window.prompt("what is your username? ");
// console.log(username)
//second way
// let username ; 
// document.getElementById("mysubmit").onclick = function() {
//     username = document.getElementById("My-text").value ; 
//     document.getElementById("MyId").textContent = `hello ${username}`
//     console.log(username)
// }



//type conversion ex1
// let age = window.prompt("how old are you ? ");
// age =  Number(age); 
// age +=1 ; 
//  console.log(age , typeof age )
//ex2
// let x ; 
// let y ; 
// let z; 
// x = "pizzza" ; 
// y ="pizza" ;
// z = "pizza" ; 

// x = Number(x)
// y = String(y);
// z = Boolean ( z) ; 

// console.log( x ,typeof x);
// console.log( y ,typeof y);
// console.log( z ,typeof z);


 //constchanges
//  const  PI  = 3.14512 ; 
//  let radius = 5 ; 
//  let circumference  ; 
//  radius = window.prompt("enter radius");
//  radius = Number(radius);
// circumference = 2 * pi * radius ; 
// console.log(circumference); 
// second way 
// document.getElementById("calculate").onclick = function() { 
//   radius =   document.getElementById("text").value ; 
//    radius = Number(radius);
//   circumference = 2 * PI * radius ;
//   document.getElementById("h3").textContent =circumference + "cm"; 

// }


const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel");
let countlabelValue = 0; 
 
increaseBtn.onclick = function() {
     countlabelValue++;
     countlabel.textContent = countlabelValue;
}


decreaseBtn.onclick = function() {
    countlabelValue-- ; 
    countlabel.textContent = countlabelValue;
}

resetBtn.onclick = function() {
    countlabelValue = 0  ; 
    countlabel.textContent = countlabelValue;
}

