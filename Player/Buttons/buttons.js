class Buttons {
  constructor(x, y) {
    // actions, startTurnButton

    // this.actions = Player.actions;
    // this.startTurnButton = Player.startTurnButton;

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
    c.fillText("Buttons", this.x, this.y);

    c.strokeStyle = "#e74c3c";
    c.lineWidth = 1;
    c.arc(this.x, this.y, 25, 0, Math.PI, false);
    c.stroke();
    c.closePath();
  }
}
