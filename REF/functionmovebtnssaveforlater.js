// //************* can clean up ALL toggling by creating if loop, if toggle is set to true after clicking next move, set toggle as false.
// let playNumIndex = -1;
// let foldCount = 0;

// function testClick(e) {
//   event.preventDefault();

//   const player = playerList.childNodes;
//   // what is this called
//   if (playNumIndex < playerList.childNodes.length) {
//     playNumIndex = playNumIndex + 1;
//   } else {
//     playNumIndex = 0;
//   }
//   // create an array of player numbers
//   let playerNumber = [player[0], player[1], player[2], player[3], player[4], player[5], player[6], player[7], player[8]];
//   // console.log("PlayerNumberIndex: " + playNumIndex);
//   // initiate first turn, select first player and deselect all others
//   if (playNumIndex == 0) {
//     playerList.childNodes[playNumIndex].addEventListener("click", actionsPlayer); // on
//     player[0].classList.toggle("turn");
//     for (let g = 1; g < playerList.childNodes.length; g++) {
//       playerNumber[g].classList.toggle("notTurn");
//     }

//     // initiate all turns after the first, selects next player and deselects last player
//   } else if (playNumIndex > 0 && playNumIndex <= playerList.childNodes.length - 1 && playerNumber[playNumIndex].classList.length == 2) {
//     playerList.childNodes[playNumIndex].addEventListener("click", actionsPlayer); // on
//     playerList.childNodes[playNumIndex - 1].removeEventListener("click", actionsPlayer); // off
//     playerNumber[playNumIndex - 1].classList.toggle("turn");
//     playerNumber[playNumIndex - 1].classList.toggle("notTurn");
//     playerNumber[playNumIndex].classList.toggle("turn");
//     playerNumber[playNumIndex].classList.toggle("notTurn");

//     // skips over a folded player, seems to work, might need refactoring
//   } else if (playNumIndex > 0 && playNumIndex <= playerList.childNodes.length - 1 && playerNumber[playNumIndex].classList.length == 3) {
//     foldCount = 0;
//     do {
//       foldCount = foldCount + 1;
//       playNumIndex = playNumIndex + 1;
//     } while (playerNumber[playNumIndex].classList.length == 3);
//     playNumIndex = playNumIndex - foldCount;

//     playerList.childNodes[playNumIndex + foldCount].addEventListener("click", actionsPlayer); // on
//     playerList.childNodes[playNumIndex - 1].removeEventListener("click", actionsPlayer); // off
//     playerNumber[playNumIndex - 1].classList.toggle("turn");
//     playerNumber[playNumIndex - 1].classList.toggle("notTurn");
//     playerNumber[playNumIndex + foldCount].classList.toggle("turn");
//     playerNumber[playNumIndex + foldCount].classList.toggle("notTurn");
//     playNumIndex = playNumIndex + foldCount;
//     // if (playNumIndex > playerList.childNodes.length) {
//     //   playNumIndex = playerList.childNodes.length;
//     // }
//     console.log("balls: " + playerNumber[playNumIndex].folded);
//     // initiate turn after last player, removes all deselected players
//   } else if (playNumIndex >= playerList.childNodes.length) {
//     playerList.childNodes[playNumIndex - 1].removeEventListener("click", actionsPlayer); // off
//     playerNumber[playNumIndex - 1].classList.toggle("turn");
//     playerNumber[playNumIndex - 1].classList.toggle("notTurn");
//     for (let h = 0; h < playerList.childNodes.length; h++) {
//       playerNumber[h].classList.toggle("notTurn");
//     }
//     // playNumIndex = playNumIndex[0];
//   }
//   console.log("PlayerNumberIndex: " + playNumIndex);
// }

// const player1 = playerList.childNodes[0];

// player1.style.transform = "rotate(180deg) translate(200px) rotate(-180deg)";

// player1.childNodes[6].innerText = "777";

// playerList.childNodes[0].style.transform = "rotate(180deg) translate(200px) rotate(-180deg)";
// playerList.childNodes[1].style.transform = "rotate(220deg) translate(200px) rotate(-220deg)";
// playerList.childNodes[2].style.transform = "rotate(260deg) translate(200px) rotate(-260deg)";
// playerList.childNodes[3].style.transform = "rotate(300deg) translate(200px) rotate(-300deg)";
// playerList.childNodes[4].style.transform = "rotate(340deg) translate(200px) rotate(-340deg)";
// playerList.childNodes[5].style.transform = "rotate(20deg) translate(200px) rotate(-20deg)";
// playerList.childNodes[6].style.transform = "rotate(60deg) translate(200px) rotate(-60deg)";
// playerList.childNodes[7].style.transform = "rotate(100deg) translate(200px) rotate(-100deg)";
// playerList.childNodes[8].style.transform = "rotate(140deg) translate(200px) rotate(-140deg)";
// playerList.childNodes[0].childNodes[1].style.transform = "translateY(200px)";
// playerList.childNodes[1].childNodes[1].style.transform = "translateY(200px)";
// playerList.childNodes[2].childNodes[1].style.transform = "translateY(200px)";
