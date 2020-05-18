class Icons {
  constructor(x, y) {
    // playerIcon, position, currentBetHand, currentBetRound

    this.playerIcon = Player.playerIcon;
    this.position = Player.position;
    this.currentBetHand = Player.currentBetHand;
    this.currentBetRound = Player.currentBetRound;

    this.x = x;
    this.y = y;
  }

  draw(c) {
    c.beginPath();
    c.fillStyle = "#e74c3c";
    c.font = "15px Arial";
    c.lineWidth = 1;
    c.textBaseLine = "top"; // not working
    c.textAlign = "center";
    c.fillText("Icons", this.x, this.y);

    c.strokeStyle = "#e74c3c50";
    c.lineWidth = 1;
    c.arc(this.x, this.y, 25, 0, Math.PI, false);
    c.stroke();
    c.closePath();
  }
}
