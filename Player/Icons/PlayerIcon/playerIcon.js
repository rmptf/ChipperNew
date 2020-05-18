class PlayerIcon {
  constructor(x, y) {
    //  text (name), text (bankAmount), animation (highLight)

    this.x = x;
    this.y = y;
  }

  draw(c) {
    c.beginPath();
    c.fillStyle = "#1abc9c";
    c.font = "15px Arial";
    c.lineWidth = 1;
    c.textBaseLine = "top"; // not working
    c.textAlign = "center";
    c.fillText("PlayerIcon", this.x, this.y);

    c.strokeStyle = "#1abc9c";
    c.lineWidth = 3;
    c.arc(this.x, this.y, 25, 0, Math.PI * 2, false);
    c.stroke();
    c.closePath();
  }
}
