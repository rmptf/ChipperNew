// Selectors
const addInput = document.querySelector(".add-input");
const addButton = document.querySelector(".add-button");
const playerList = document.querySelector(".player-list");
filterOption = document.querySelector(".filter-players");
const testButton = document.querySelector(".test-button");
const bank = 100;
const bigBlind = bank * 0.01;
const smallBlind = bank * 0.005;

// Event Listeners
document.addEventListener("DOMContentLoaded", getPlayers);
addButton.addEventListener("click", addPlayer);
// playerList.addEventListener("click", actionsPlayer);
filterOption.addEventListener("click", filterPlayers);
testButton.addEventListener("click", testClick);

// Functions
function addPlayer(event) {
  event.preventDefault();
  // Player DIV
  const playerDiv = document.createElement("div");
  playerDiv.classList.add("player");
  // Create LI
  const newPlayer = document.createElement("li");
  newPlayer.innerText = addInput.value;
  newPlayer.classList.add("player-item");
  playerDiv.appendChild(newPlayer);

  // const newOptions = document.createElement("li");
  // newOptions.classList.add("raise-options");
  // playerDiv.appendChild(newPlayer);

  // Add player to local storage
  saveLocalPlayers(addInput.value);
  // Quit Button
  const quitButton = document.createElement("button");
  quitButton.innerHTML = '<i class="fas fa-sign-in-alt"></i>';
  quitButton.classList.add("quit-btn");
  playerDiv.appendChild(quitButton);
  // Fold Button
  const foldButton = document.createElement("button");
  foldButton.innerHTML = '<i class="fas fa-times"></i>';
  foldButton.classList.add("fold-btn");
  playerDiv.appendChild(foldButton);
  // Check button
  const checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fas fa-check"></i>';
  checkButton.classList.add("check-btn");
  playerDiv.appendChild(checkButton);
  // Call Button
  const callButton = document.createElement("button");
  callButton.innerHTML = '<i class="fas fa-phone-alt"></i>';
  callButton.classList.add("call-btn");
  playerDiv.appendChild(callButton);

  //
  // Raise Button
  const raiseButton = document.createElement("button");
  raiseButton.innerHTML = '<i class="fas fa-coins"></i>';
  raiseButton.classList.add("raise-btn");
  playerDiv.appendChild(raiseButton);

  // Cancel Button
  const cancelButton = document.createElement("button");
  cancelButton.innerHTML = '<i class="fas fa-times"></i>';
  cancelButton.classList.add("cancel-btn");
  // playerDiv.appendChild(cancelButton);
  raiseButton.appendChild(cancelButton);

  // Decrease Button
  const decreaseButton = document.createElement("button");
  decreaseButton.innerHTML = '<i class="fas fa-angle-down"></i>';
  decreaseButton.classList.add("decrease-btn");
  // playerDiv.appendChild(decreaseButton);
  raiseButton.appendChild(decreaseButton);

  // Increase Button
  const increaseButton = document.createElement("button");
  increaseButton.innerHTML = '<i class="fas fa-angle-up"></i>';
  increaseButton.classList.add("increase-btn");
  // playerDiv.appendChild(increaseButton);
  raiseButton.appendChild(increaseButton);

  // Confirm Button
  const confirmButton = document.createElement("button");
  confirmButton.innerHTML = '<i class="fas fa-check"></i>';
  confirmButton.classList.add("confirm-btn");
  // playerDiv.appendChild(confirmButton);
  raiseButton.appendChild(confirmButton);
  //

  // Bank Button
  const bankButton = document.createElement("button");
  bankButton.innerText = bank;
  bankButton.classList.add("bank-btn");
  playerDiv.appendChild(bankButton);

  // Bet Button
  const betButton = document.createElement("button");
  betButton.innerText = "0";
  betButton.classList.add("bet-btn");
  playerDiv.appendChild(betButton);

  // Append to List
  playerList.appendChild(playerDiv);
  // Clear add input value
  addInput.value = "";
  console.log(bankButton.innerText);
}

function actionsPlayer(e) {
  console.log(e.target); // ***very useful***
  const item = e.target;

  // Remove player button
  if (item.classList[0] === "quit-btn") {
    const player = item.parentElement;
    // Animation
    player.classList.add("fall");
    removeLocalPlayers(player);
    player.addEventListener("transitionend", function () {
      player.remove();
    });
  }

  // Fold button
  if (item.classList[0] === "fold-btn") {
    const player = item.parentElement;
    player.classList.toggle("folded");
    testClick(e);
    console.log("button position in class: " + player.classList.length);
  }

  // Check button
  if (item.classList[0] === "check-btn") {
    const player = item.parentElement;
    testClick(e);
    console.log("button position in class: " + player.classList.length);
  }

  // Call button
  if (item.classList[0] === "call-btn") {
    const player = item.parentElement;
    testClick(e);
    console.log("button position in class: " + player.classList.length);
  }

  // Raise button
  if (item.classList[0] === "raise-btn") {
    const player = item.parentElement;
    for (let i = 1; i < player.childNodes[5].childNodes.length; i++) {
      player.childNodes[5].childNodes[i].classList.toggle("raiseOptions");
    }
    player.childNodes[5].classList.toggle("raiseOptions2");
    console.log(player.childNodes[5].childNodes[1].classList);
  }

  // Increase button
  if (item.classList[0] === "increase-btn") {
    const player = item.parentElement.parentElement;
    player.childNodes[6].innerText = bank - bigBlind;
    player.childNodes[7].innerText = bigBlind;
  }
}

function filterPlayers(e) {
  // playerList.childNodes[0].bankButton.innerText = "777";
  const players = playerList.childNodes;
  console.log(players);
  players.forEach(function (player) {
    switch (e.target.value) {
      case "all":
        player.style.display = "flex";
        break;
      case "folded":
        if (player.classList.contains("folded")) {
          player.style.display = "flex";
        } else {
          player.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!player.classList.contains("folded")) {
          player.style.display = "flex";
        } else {
          player.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalPlayers(player) {
  // Check what is in there
  let players;
  if (localStorage.getItem("players") === null) {
    players = [];
  } else {
    players = JSON.parse(localStorage.getItem("players"));
  }
  players.push(player);
  localStorage.setItem("players", JSON.stringify(players));
}

function getPlayers() {
  // Check what is in there
  let players;
  if (localStorage.getItem("players") === null) {
    players = [];
  } else {
    players = JSON.parse(localStorage.getItem("players"));
  }
  players.forEach(function (player) {
    // Player DIV
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("player");
    // Create LI
    const newPlayer = document.createElement("li");
    newPlayer.innerText = player;
    newPlayer.classList.add("player-item");
    playerDiv.appendChild(newPlayer);
    // Quit Button
    const quitButton = document.createElement("button");
    quitButton.innerHTML = '<i class="fas fa-sign-in-alt"></i>';
    quitButton.classList.add("quit-btn");
    playerDiv.appendChild(quitButton);
    // Fold Button
    const foldButton = document.createElement("button");
    foldButton.innerHTML = '<i class="fas fa-times"></i>';
    foldButton.classList.add("fold-btn");
    playerDiv.appendChild(foldButton);
    // Check button
    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add("check-btn");
    playerDiv.appendChild(checkButton);
    // Call Button
    const callButton = document.createElement("button");
    callButton.innerHTML = '<i class="fas fa-phone-alt"></i>';
    callButton.classList.add("call-btn");
    playerDiv.appendChild(callButton);

    //
    // Raise Button
    const raiseButton = document.createElement("button");
    raiseButton.innerHTML = '<i class="fas fa-coins"></i>';
    raiseButton.classList.add("raise-btn");
    playerDiv.appendChild(raiseButton);

    // Cancel Button
    const cancelButton = document.createElement("button");
    cancelButton.innerHTML = '<i class="fas fa-times"></i>';
    cancelButton.classList.add("cancel-btn");
    // playerDiv.appendChild(cancelButton);
    raiseButton.appendChild(cancelButton);

    // Decrease Button
    const decreaseButton = document.createElement("button");
    decreaseButton.innerHTML = '<i class="fas fa-angle-down"></i>';
    decreaseButton.classList.add("decrease-btn");
    // playerDiv.appendChild(decreaseButton);
    raiseButton.appendChild(decreaseButton);

    // Increase Button
    const increaseButton = document.createElement("button");
    increaseButton.innerHTML = '<i class="fas fa-angle-up"></i>';
    increaseButton.classList.add("increase-btn");
    // playerDiv.appendChild(increaseButton);
    raiseButton.appendChild(increaseButton);

    // Confirm Button
    const confirmButton = document.createElement("button");
    confirmButton.innerHTML = '<i class="fas fa-check"></i>';
    confirmButton.classList.add("confirm-btn");
    // playerDiv.appendChild(confirmButton);
    raiseButton.appendChild(confirmButton);
    //

    // Bank Button
    const bankButton = document.createElement("button");
    bankButton.innerText = bank;
    bankButton.classList.add("bank-btn");
    playerDiv.appendChild(bankButton);

    // Bet Button
    const betButton = document.createElement("button");
    betButton.innerText = "0";
    betButton.classList.add("bet-btn");
    playerDiv.appendChild(betButton);

    // Append to List
    playerList.appendChild(playerDiv);
  });
}

function removeLocalPlayers(player) {
  // Check what is in there
  let players;
  if (localStorage.getItem("players") === null) {
    players = [];
  } else {
    players = JSON.parse(localStorage.getItem("players"));
  }
  const playerIndex = player.children[0].innerText;
  players.splice(players.indexOf(playerIndex), 1);
  localStorage.setItem("players", JSON.stringify(players));
  console.log(player.children[0].innerText); // ***VERY IMPORTANT ***
  // console.log(players.indexOf("cunt"));        // ***VERY IMPORTANT ***
}

//************* can clean up ALL toggling by creating if loop, if toggle is set to true after clicking next move, set toggle as false.
let playNumIndex = -1;
let foldCount = 0;

function testClick(e) {
  event.preventDefault();

  const player = playerList.childNodes;
  // what is this called
  if (playNumIndex < playerList.childNodes.length) {
    playNumIndex = playNumIndex + 1;
  } else {
    playNumIndex = 0;
  }
  // create an array of player numbers
  let playerNumber = [player[0], player[1], player[2], player[3], player[4], player[5], player[6], player[7], player[8]];
  // console.log("PlayerNumberIndex: " + playNumIndex);
  // initiate first turn, select first player and deselect all others
  if (playNumIndex == 0) {
    playerList.childNodes[playNumIndex].addEventListener("click", actionsPlayer); // on
    player[0].classList.toggle("turn");
    for (let g = 1; g < playerList.childNodes.length; g++) {
      playerNumber[g].classList.toggle("notTurn");
    }

    // initiate all turns after the first, selects next player and deselects last player
  } else if (playNumIndex > 0 && playNumIndex <= playerList.childNodes.length - 1 && playerNumber[playNumIndex].classList.length == 2) {
    playerList.childNodes[playNumIndex].addEventListener("click", actionsPlayer); // on
    playerList.childNodes[playNumIndex - 1].removeEventListener("click", actionsPlayer); // off
    playerNumber[playNumIndex - 1].classList.toggle("turn");
    playerNumber[playNumIndex - 1].classList.toggle("notTurn");
    playerNumber[playNumIndex].classList.toggle("turn");
    playerNumber[playNumIndex].classList.toggle("notTurn");

    // skips over a folded player, seems to work, might need refactoring
  } else if (playNumIndex > 0 && playNumIndex <= playerList.childNodes.length - 1 && playerNumber[playNumIndex].classList.length == 3) {
    foldCount = 0;
    do {
      foldCount = foldCount + 1;
      playNumIndex = playNumIndex + 1;
    } while (playerNumber[playNumIndex].classList.length == 3);
    playNumIndex = playNumIndex - foldCount;

    playerList.childNodes[playNumIndex + foldCount].addEventListener("click", actionsPlayer); // on
    playerList.childNodes[playNumIndex - 1].removeEventListener("click", actionsPlayer); // off
    playerNumber[playNumIndex - 1].classList.toggle("turn");
    playerNumber[playNumIndex - 1].classList.toggle("notTurn");
    playerNumber[playNumIndex + foldCount].classList.toggle("turn");
    playerNumber[playNumIndex + foldCount].classList.toggle("notTurn");
    playNumIndex = playNumIndex + foldCount;
    // if (playNumIndex > playerList.childNodes.length) {
    //   playNumIndex = playerList.childNodes.length;
    // }

    // initiate turn after last player, removes all deselected players
  } else if (playNumIndex >= playerList.childNodes.length) {
    playerList.childNodes[playNumIndex - 1].removeEventListener("click", actionsPlayer); // off
    playerNumber[playNumIndex - 1].classList.toggle("turn");
    playerNumber[playNumIndex - 1].classList.toggle("notTurn");
    for (let h = 0; h < playerList.childNodes.length; h++) {
      playerNumber[h].classList.toggle("notTurn");
    }
    // playNumIndex = playNumIndex[0];
  }
  console.log("PlayerNumberIndex: " + playNumIndex);
}

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
