// class IncreaseDecrease {
//   constructor(x, y, r, c1, c2, c3, colorChange1, colorChange2, colorChange3, strk, strkC1, strkC2, strkC3) {
//   this.x = x;
//   this.y = y;
//   this.r = r;
//   this.c1 = c1;
//   this.c2 = c2;
//   this.c3 = c3;
//   this.brightness1 = this.c1;
//   this.brightness2 = this.c2;
//   this.brightness3 = this.c3;
//   this.colorChange1 = colorChange1;
//   this.colorChange2 = colorChange2;
//   this.colorChange3 = colorChange3;
//   this.strk = strk;
//   this.strkC1 = strkC1;
//   this.strkC2 = strkC2;
//   this.strkC2 = strkC2;
// }

// changeColor1(bright1) {
//   this.brightness1 = bright1;
// }
// changeColor2(bright2) {
//   this.brightness2 = bright2;
// }
// changeColor3(bright3) {
//   this.brightness3 = bright3;
// }

// contains(px, py) {
//   let d = dist(px, py, this.x, this.y);
//   if (d < this.r) {
//     return true;
//   } else {
//     return false;
//   }
// }

// increaseDecreaseA1Click() {
//   for (let i = 0; i < increaseDecrease.length; i++) {
//     if (increaseDecrease[0].contains(mouseX, mouseY)) {
//       console.log("A1 Click");
//       console.log(increaseDecrease.length);
//       increaseDecrease.splice(0, 1);
//       increaseDecrease[0] = new IncreaseDecrease(width * 0.8, height * 0.33, 50, 247, 181, 180, 215, 135, 134, 5, 247, 181, 180);
//     }
//   }
// }

// increaseDecreaseA1MouseOver() {
//   for (let i = 0; i < increaseDecrease.length; i++) {
//     if (increaseDecrease[0].contains(mouseX, mouseY)) {
//       increaseDecrease[0].changeColor1(this.colorChange1);
//       increaseDecrease[0].changeColor2(this.colorChange2);
//       increaseDecrease[0].changeColor3(this.colorChange3);
//       console.log("A1 MO");
//     } else {
//       increaseDecrease[0].changeColor1(this.c1);
//       increaseDecrease[0].changeColor2(this.c2);
//       increaseDecrease[0].changeColor3(this.c3);
//     }
//     increaseDecrease[0].show();
//   }
// }

//   show() {
//     strokeWeight(this.strk);
//     stroke(this.strkC1, this.strkC2, this.strkC3);
//     fill(this.brightness1, this.brightness2, this.brightness3);
//     ellipse(this.x, this.y, this.r * 2);

//     stroke(240, 241, 236);
//     line(this.x, this.y - this.r / 2, this.x, this.y + this.r / 2);

//     stroke(240, 241, 236);
//     line(this.x - this.r / 2, this.y, this.x + this.r / 2, this.y);
//   }
// }
