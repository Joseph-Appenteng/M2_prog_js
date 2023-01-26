class App {
  runApplication() {
    let canvas = document.getElementById("canvasId");
    let title = document.getElementById("title");
    console.log(title);
    console.log(canvas);
    let g = canvas.getContext("2d");
    this.huis(400, 100, g);
    this.huis(300, 150, g);
    this.straat(100, 250, g);
    this.straat(300, 150, g);
    this.sneewman(0, 0, g);
    this.sneewman(100, -50, g);
    this.sneewman(200, -100, g);
    this.boom(100,250,g)
    this.boom(300,150,g)
  }
 
  huis(x, y, g) {
    g.beginPath();
    g.fillStyle = "white";
    g.moveTo(x + 150, y + 50);
    g.lineTo(x + 100, y + 150);
    g.lineTo(x + 300, y + 200);
    g.lineTo(x + 350, y + 100);
    g.closePath();
    g.stroke();
    g.fill();

    g.beginPath();
    g.fillStyle = "aquamarine";
    g.moveTo(x + 350, y + 100);
    g.lineTo(x + 400, y + 150);
    g.lineTo(x + 400, y + 250);
    g.lineTo(x + 300, y + 300);
    g.lineTo(x + 100, y + 250);
    g.lineTo(x + 100, y + 150);
    g.lineTo(x + 300, y + 200);
    g.closePath();
    g.stroke();
    g.fill();

    g.beginPath();
    g.fillStyle = "white";
    g.moveTo(x + 125, y + 175);
    g.lineTo(x + 275, y + 212, 5);
    g.lineTo(x + 275, y + 262, 5);
    g.lineTo(x + 125, y + 225);
    g.closePath();
    g.stroke();
    g.fill();

    g.beginPath();
    g.fillStyle = "white";
    g.moveTo(x + 325, y + 217, 5);
    g.lineTo(x + 380, y + 190);
    g.lineTo(x + 380, y + 260);
    g.lineTo(x + 325, y + 287, 5);
    g.closePath();
    g.stroke();
    g.fill();
  }

  straat(x, y, g) {
    g.beginPath();
    g.fillStyle = "wite";
    g.moveTo(x + 600, y + 150);
    g.lineTo(x + 900, y + 100);
    g.lineTo(x + 600, y + 300);
    g.lineTo(x + 300, y + 300);
    g.lineTo(x + 600, y + 150);
    g.closePath();
    g.stroke();
    g.fill();
  }
  sneewman(x, y, g) {
    g.beginPath();
    g.fillStyle = "white";
    g.arc(x + 525, y + 395, 15, 0, 2 * Math.PI);
    g.stroke();
    g.fill();

    g.beginPath();
    g.fillStyle = "white";
    g.arc(x + 525, y + 430, 20, 0, 2 * Math.PI);
    g.stroke();
    g.fill();

    g.beginPath();
    g.fillStyle = "white";
    g.arc(x + 525, y + 480, 30, 0, 2 * Math.PI);
    g.stroke();
    g.fill();

    g.beginPath();
    g.fillStyle = "Black";
    g.arc(x + 512, y + 390, 2, 0, 2 * Math.PI);
    g.stroke();
    g.fill();

    g.beginPath();
    g.fillStyle = "Black";
    g.arc(x + 537, y + 390, 2, 0, 2 * Math.PI);
    g.stroke();
    g.fill();

    g.beginPath();
    g.fillStyle = "Orange";
    g.moveTo(x + 525, y + 395);
    g.lineTo(x + 525, y + 405);
    g.lineTo(x + 550, y + 400);
    g.closePath();
    g.stroke();
    g.fill();
  }
}

let app = new App();
app.runApplication();
