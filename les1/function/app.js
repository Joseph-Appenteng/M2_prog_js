class App
{
    runApplication()
   {
    console.log("Merry Christmas!")
    let canvas = document.getElementById("canvasId")
    let g = canvas.getContext("2d");
    let x = 300;
    let y = 100;
    //line
    g.beginPath()
    g.fillStyle = "green";
    g.moveTo(x,y);
    g.lineTo(x-30,y+30);
    g.lineTo(x+30,y+30);
    g.moveTo(x+30,y+30);
    g.lineTo(x+30,y+100);
    g.moveTo(x+30,y+100);
    g.lineTo(x-30,y+100);
    g.moveTo(x-30,y+100);
    g.lineTo(x-30,y+30);
    g.closePath();
    g.stroke();
    g.fill();
    


    console.log(canvas)
   }
}

let app = new App();
app.runApplication();