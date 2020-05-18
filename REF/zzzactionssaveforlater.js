class Actions {
  constructor() {}
  //   callVariables() {
  //     let player = [];
  //     let icons = [];
  //     let playerIcon = [];
  //     let progressBar = [];
  //     let position = [];
  //     let currentBetHand = [];
  //     let currentBetRound = [];

  //     let buttons = [];
  //   }
  //   //   actions.callVariables();

  addThoseFucks() {
    for (let i = 0; i < playerCount; i++) {
      player[i] = new Player(canvas.width * 0.1, canvas.height * 0.6);
      icons[i] = new Icons(canvas.width * 0.2, canvas.height * 0.7);
      playerIcon[i] = new PlayerIcon(canvas.width * 0.05, canvas.height * 0.8);
      progressBar[i] = new ProgressBar(canvas.width * 0.125, canvas.height * 0.8);
      position[i] = new Position(canvas.width * 0.2, canvas.height * 0.8);
      currentBetHand[i] = new CurrentBetHand(canvas.width * 0.275, canvas.height * 0.8);
      currentBetRound[i] = new CurrentBetRound(canvas.width * 0.35, canvas.height * 0.8);

      buttons[i] = new Buttons(canvas.width * 0.8, canvas.height * 0.7);
    }
  }
  // actions.addThoseFucks();

  drawThoseFucks() {
    for (let i = 0; i < playerCount; i++) {
      player[i].draw(c);
      icons[i].draw(c);
      playerIcon[i].draw(c);
      progressBar[i].draw(c);
      position[i].draw(c);
      currentBetHand[i].draw(c);
      currentBetRound[i].draw(c);

      buttons[i].draw(c);
    }
  }
  // actions.drawThoseFucks();

  seatThoseFucks() {
    if (playerCount > 1) {
      player[1].x = canvas.width * 0.2;
      // player[1].y = canvas.height * 0.25;
      // icons[1].y = canvas.height * 0.7;
      // playerIcon[1].y = canvas.height * 0.8;
      // progressBar[1].y = canvas.height * 0.8;
      // position[1].y = canvas.height * 0.8;
      // currentBetHand[1].y = canvas.height * 0.8;
      // currentBetRound[1].y = canvas.height * 0.8;
      // buttons[1].y = canvas.height * 0.7;
    }

    if (playerCount > 2) {
      player[2].x = canvas.width * 0.3;
    }

    if (playerCount > 3) {
      player[3].x = canvas.width * 0.4;
    }

    if (playerCount > 4) {
      player[4].x = canvas.width * 0.5;
    }

    if (playerCount > 5) {
      player[5].x = canvas.width * 0.6;
    }

    if (playerCount > 6) {
      player[6].x = canvas.width * 0.7;
    }

    if (playerCount > 7) {
      player[7].x = canvas.width * 0.8;
    }

    if (playerCount > 8) {
      player[8].x = canvas.width * 0.9;
    }
  }
  // actions.seatThoseFucks();
}
