// Generating Random Numbers //

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Assigning Random Numbers to Dice Images //

var dice1 = "images/dice" + randomNumber1 + ".png";
var dice2 = "images/dice" + randomNumber2 + ".png";

// Changing Dice Images According to Random Numbers //

document.querySelector(".dice .img1").setAttribute("src", dice1);
document.querySelector(".dice .img2").setAttribute("src", dice2);

// Declaring Winner or Draw //

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
