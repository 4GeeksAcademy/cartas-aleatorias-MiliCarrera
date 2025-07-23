import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  const suitsElements = document.querySelectorAll(".suit")
  const number = document.getElementById("numero")

  let cards = ["♦", "♥", "♠", "♣"];
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

    let singleCard = cards[Math.floor(Math.random() * cards.length)];
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
         
  
suitsElements.forEach(element => {
  element.textContent = singleCard
 
  if(singleCard == "♦" || singleCard == "♥"){
     element.classList.add("text-danger")
  }
});

number.innerHTML = singleNumber
  

        
        };


