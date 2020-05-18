// function setup() {
//   createCanvas(400, 400);

//   increaseDecrease[0] = new IncreaseDecrease(width * 0.8, height * 0.66, 50, 220, 179, 69, 173, 116, 20, 5, 240, 241, 236);
//   // increaseDecrease[1] = new IncreaseDecrease(width * 0.2, height * 0.66, 50, 220, 179, 69, 173, 116, 20, 5, 240, 241, 236);
// }

// // function mousePressed() {
// //   for (let i = 0; i < increaseDecrease.length; i++) {
// //     increaseDecrease[0].increaseDecreaseA1Click();
// //   }
// // }

// function draw() {
//   background(240, 241, 236);

//   // for (let i = 0; i < increaseDecrease.length; i++) {
//   //   increaseDecrease[0].increaseDecreaseA1MouseOver();
//   // }
// }
//
//
//
//
//
//
// ====================================================================================
// // let player = [];
// let playerCount = 3;
// var canvas = document.querySelector("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// var c = canvas.getContext("2d");

// // player[0] = new Player();

// let allPlayer = [];

// let createPlayer = function (players) {
//   players.draw(c);
// };

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);

//   for (let i = 0; i < playerCount; i++) {
//     let randomX = Math.random() * window.innerWidth;
//     let randomY = Math.random() * window.innerHeight;
//     let player = new Player(randomX, 100);
//     allPlayer.push(player);
//     createPlayer(allPlayer[i]);
//   }

//   // player[0].draw(c);
// }
// animate();
