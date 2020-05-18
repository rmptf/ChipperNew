class Player {
  constructor(x, y) {
    // icons, buttons
    this.icons = Player.icons; // bank, position, currentBet
    this.buttons = Player.buttons; // fold, check, call, raise, betButton
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
    c.fillText("Player", this.x, this.y);

    c.strokeStyle = "#e74c3c";
    c.lineWidth = 1;
    c.arc(this.x, this.y, 25, 0, Math.PI, false);
    c.stroke();
    c.closePath();
  }
}
