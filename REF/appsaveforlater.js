// let player = [];
// let icons = [];
// let playerIcon = [];
// let progressBar = [];
// let position = [];
// let currentBetHand = [];
// let currentBetRound = [];
// let buttons = [];
// let playerCount = 9;
// let favoriteWord = "tits";

// const btn1 = document.querySelector(".btn1");
// // btn2.style.display = "none";
// const btn2 = document.querySelector(".btn2");
// btn2.style.display = "none";

// btn1.addEventListener("click", clickBtn1);
// btn2.addEventListener("click", clickBtn2);

// function clickBtn1() {
//   const player1 = document.querySelector(".player1");
//   player1.style.display = "none";
//   const player2 = document.querySelector(".player2");
//   player2.style.display = "none";
//   const player3 = document.querySelector(".player3");
//   player3.style.display = "none";
//   const player4 = document.querySelector(".player4");
//   player4.style.display = "none";
//   const player5 = document.querySelector(".player5");
//   player5.style.display = "none";
//   const player6 = document.querySelector(".player6");
//   player6.style.display = "none";
//   const player7 = document.querySelector(".player7");
//   player7.style.display = "none";
//   const player8 = document.querySelector(".player8");
//   player8.style.display = "none";
//   const player9 = document.querySelector(".player9");
//   player9.style.display = "none";

//   btn1.style.display = "none";
//   btn2.style.display = "block";
//   player1.innerHTML = "FAT";
//   if (playerCount == 2) {
//     player1.style.display = "block";
//     player2.style.display = "block";
//     player1.style.opacity = 1;
//     player2.style.opacity = 1;
//     player1.style.transform = "translate(-50%, -50%) rotate(180deg) translate(200px) rotate(-180deg)";
//     player2.style.transform = "translate(-50%, -50%) rotate(360deg) translate(200px)";
//   }
//   if (playerCount == 3) {
//     player1.style.display = "block";
//     player2.style.display = "block";
//     player3.style.display = "block";
//     player1.style.opacity = 1;
//     player2.style.opacity = 1;
//     player3.style.opacity = 1;
//     player1.style.transform = "translate(-50%, -50%) rotate(180deg) translate(200px) rotate(-180deg)";
//     player2.style.transform = "translate(-50%, -50%) rotate(300deg) translate(200px) rotate(-300deg)";
//     player3.style.transform = "translate(-50%, -50%) rotate(60deg) translate(200px) rotate(-60deg)";
//   }
//   if (playerCount == 4) {
//     player1.style.display = "block";
//     player2.style.display = "block";
//     player3.style.display = "block";
//     player4.style.display = "block";
//     player1.style.opacity = 1;
//     player2.style.opacity = 1;
//     player3.style.opacity = 1;
//     player4.style.opacity = 1;
//     player1.style.transform = "translate(-50%, -50%) rotate(180deg) translate(200px) rotate(-180deg)";
//     player2.style.transform = "translate(-50%, -50%) rotate(270deg) translate(200px) rotate(-270deg)";
//     player3.style.transform = "translate(-50%, -50%) rotate(360deg) translate(200px) rotate(-360deg)";
//     player4.style.transform = "translate(-50%, -50%) rotate(90deg) translate(200px) rotate(-90deg)";
//   }
//   if (playerCount == 5) {
//     player1.style.display = "block";
//     player2.style.display = "block";
//     player3.style.display = "block";
//     player4.style.display = "block";
//     player5.style.display = "block";
//     player1.style.opacity = 1;
//     player2.style.opacity = 1;
//     player3.style.opacity = 1;
//     player4.style.opacity = 1;
//     player5.style.opacity = 1;
//     player1.style.transform = "translate(-50%, -50%) rotate(180deg) translate(200px) rotate(-180deg)";
//     player2.style.transform = "translate(-50%, -50%) rotate(252deg) translate(200px) rotate(-252deg)";
//     player3.style.transform = "translate(-50%, -50%) rotate(324deg) translate(200px) rotate(-324deg)";
//     player4.style.transform = "translate(-50%, -50%) rotate(36deg) translate(200px) rotate(-36deg)";
//     player5.style.transform = "translate(-50%, -50%) rotate(108deg) translate(200px) rotate(-108deg)";
//   }
//   if (playerCount == 6) {
//     player1.style.display = "block";
//     player2.style.display = "block";
//     player3.style.display = "block";
//     player4.style.display = "block";
//     player5.style.display = "block";
//     player6.style.display = "block";
//     player1.style.opacity = 1;
//     player2.style.opacity = 1;
//     player3.style.opacity = 1;
//     player4.style.opacity = 1;
//     player5.style.opacity = 1;
//     player6.style.opacity = 1;
//     player1.style.transform = "translate(-50%, -50%) rotate(180deg) translate(200px) rotate(-180deg)";
//     player2.style.transform = "translate(-50%, -50%) rotate(240deg) translate(200px) rotate(-240deg)";
//     player3.style.transform = "translate(-50%, -50%) rotate(300deg) translate(200px) rotate(-300deg)";
//     player4.style.transform = "translate(-50%, -50%) rotate(360deg) translate(200px) rotate(-360deg)";
//     player5.style.transform = "translate(-50%, -50%) rotate(60deg) translate(200px) rotate(-60deg)";
//     player6.style.transform = "translate(-50%, -50%) rotate(120deg) translate(200px) rotate(-120deg)";
//   }
//   if (playerCount == 7) {
//     player1.style.display = "block";
//     player2.style.display = "block";
//     player3.style.display = "block";
//     player4.style.display = "block";
//     player5.style.display = "block";
//     player6.style.display = "block";
//     player7.style.display = "block";
//     player1.style.opacity = 1;
//     player2.style.opacity = 1;
//     player3.style.opacity = 1;
//     player4.style.opacity = 1;
//     player5.style.opacity = 1;
//     player6.style.opacity = 1;
//     player7.style.opacity = 1;
//     player1.style.transform = "translate(-50%, -50%) rotate(180deg) translate(200px) rotate(-180deg)";
//     player2.style.transform = "translate(-50%, -50%) rotate(231.5deg) translate(200px) rotate(-231.5deg)";
//     player3.style.transform = "translate(-50%, -50%) rotate(283deg) translate(200px) rotate(-283deg)";
//     player4.style.transform = "translate(-50%, -50%) rotate(334.5deg) translate(200px) rotate(-334.5deg)";
//     player5.style.transform = "translate(-50%, -50%) rotate(26deg) translate(200px) rotate(-26deg)";
//     player6.style.transform = "translate(-50%, -50%) rotate(77.5deg) translate(200px) rotate(-77.5deg)";
//     player7.style.transform = "translate(-50%, -50%) rotate(129deg) translate(200px) rotate(-129deg)";
//   }
//   if (playerCount == 8) {
//     player1.style.display = "block";
//     player2.style.display = "block";
//     player3.style.display = "block";
//     player4.style.display = "block";
//     player5.style.display = "block";
//     player6.style.display = "block";
//     player7.style.display = "block";
//     player8.style.display = "block";
//     player1.style.opacity = 1;
//     player2.style.opacity = 1;
//     player3.style.opacity = 1;
//     player4.style.opacity = 1;
//     player5.style.opacity = 1;
//     player6.style.opacity = 1;
//     player7.style.opacity = 1;
//     player8.style.opacity = 1;
//     player1.style.transform = "translate(-50%, -50%) rotate(180deg) translate(200px) rotate(-180deg)";
//     player2.style.transform = "translate(-50%, -50%) rotate(225deg) translate(200px) rotate(-225deg)";
//     player3.style.transform = "translate(-50%, -50%) rotate(270deg) translate(200px) rotate(-270deg)";
//     player4.style.transform = "translate(-50%, -50%) rotate(315deg) translate(200px) rotate(-315deg)";
//     player5.style.transform = "translate(-50%, -50%) rotate(360deg) translate(200px) rotate(-360deg)";
//     player6.style.transform = "translate(-50%, -50%) rotate(45deg) translate(200px) rotate(-45deg)";
//     player7.style.transform = "translate(-50%, -50%) rotate(90deg) translate(200px) rotate(-90deg)";
//     player8.style.transform = "translate(-50%, -50%) rotate(135deg) translate(200px) rotate(-135deg)";
//   }
//   if (playerCount == 9) {
//     player1.style.display = "block";
//     player2.style.display = "block";
//     player3.style.display = "block";
//     player4.style.display = "block";
//     player5.style.display = "block";
//     player6.style.display = "block";
//     player7.style.display = "block";
//     player8.style.display = "block";
//     player9.style.display = "block";
//     player1.style.opacity = 1;
//     player2.style.opacity = 1;
//     player3.style.opacity = 1;
//     player4.style.opacity = 1;
//     player5.style.opacity = 1;
//     player6.style.opacity = 1;
//     player7.style.opacity = 1;
//     player8.style.opacity = 1;
//     player9.style.opacity = 1;
//     player1.style.transform = "translate(-50%, -50%) rotate(180deg) translate(200px) rotate(-180deg)";
//     player2.style.transform = "translate(-50%, -50%) rotate(220deg) translate(200px) rotate(-220deg)";
//     player3.style.transform = "translate(-50%, -50%) rotate(260deg) translate(200px) rotate(-260deg)";
//     player4.style.transform = "translate(-50%, -50%) rotate(300deg) translate(200px) rotate(-300deg)";
//     player5.style.transform = "translate(-50%, -50%) rotate(340deg) translate(200px) rotate(-340deg)";
//     player6.style.transform = "translate(-50%, -50%) rotate(20deg) translate(200px) rotate(-20deg)";
//     player7.style.transform = "translate(-50%, -50%) rotate(60deg) translate(200px) rotate(-60deg)";
//     player8.style.transform = "translate(-50%, -50%) rotate(100deg) translate(200px) rotate(-100deg)";
//     player9.style.transform = "translate(-50%, -50%) rotate(140deg) translate(200px) rotate(-140deg)";
//   }
// }

// function clickBtn2() {
//   const player1 = document.querySelector(".player1");

//   const player2 = document.querySelector(".player2");

//   const player3 = document.querySelector(".player3");

//   const player4 = document.querySelector(".player4");

//   const player5 = document.querySelector(".player5");

//   const player6 = document.querySelector(".player6");

//   const player7 = document.querySelector(".player7");

//   const player8 = document.querySelector(".player8");

//   const player9 = document.querySelector(".player9");

//   btn2.style.display = "none";
//   btn1.style.display = "block";
//   document.querySelector(".player1").innerHTML = favoriteWord;
//   player1.style.opacity = 0;
//   player2.style.opacity = 0;
//   player3.style.opacity = 0;
//   player4.style.opacity = 0;
//   player5.style.opacity = 0;
//   player6.style.opacity = 0;
//   player7.style.opacity = 0;
//   player8.style.opacity = 0;
//   player9.style.opacity = 0;
// }

// var canvas = document.querySelector("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// var c = canvas.getContext("2d");

// let actions = new Actions();
// actions.addThoseFucks();
// actions.seatThoseFucks();

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);

//   // actions.drawThoseFucks();
// }

// animate();
