class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d");
        console.log("hello worled!");
        this.Mario();
        let result = this.Bwahaha();
        console.log(result);
        this.GETALLEN(1, 2);
        this.tekenHuis(0,0,g);
        this.tekenHuis(0,500,g);
        this.tekenHuis(0,250,g);
        this.tekenHuis(500,0,g);
        this.tekenHuis(500,250,g);
        this.tekenHuis(500,500,g);

        
    }

    Mario()
    {
        console.log("MARIO!!");
    }

    Bwahaha()
    {
        return"BWAHAHA";
    }

    GETALLEN(getale_een, getal_twee)
    {
        console.log(getale_een + getal_twee);
    }

    tekenHuis(x,y, g)
    {
      
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(x+150,y+50);
        g.lineTo(x+100,y+150);
        g.lineTo(x+300,y+200);
        g.lineTo(x+350,y+100);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(x+350,y+100);
        g.lineTo(x+400,y+150);
        g.lineTo(x+400,y+250);
        g.lineTo(x+300,y+300);
        g.lineTo(x+100,y+250);
        g.lineTo(x+100,y+150);
        g.lineTo(x+300,y+200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(x+400,y+150);
        g.lineTo(x+300,y+200);
        g.lineTo(x+300,y+300);
        g.lineTo(x+400,y+250);
        g.closePath();
        g.stroke();

        g.beginPath()
        g.moveTo(x+125,y+175);
        g.lineTo(x+275,y+212,5);
        g.lineTo(x+275,y+262,5);
        g.lineTo(x+125,y+225);
        g.closePath();
        g.stroke();

        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(x+125,y+175);
        g.lineTo(x+275,y+212,5);
        g.lineTo(x+275,y+262,5);
        g.lineTo(x+125,y+225);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(x+200,y+193,5);
        g.lineTo(x+200,y+243,5);
        g.closePath();
        g.stroke();

        g.beginPath()
        g.moveTo(x+125,y+200);
        g.lineTo(x+275,y+237,5);
        g.closePath();
        g.stroke();

        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(x+325,y+217,5);
        g.lineTo(x+380,y+190);
        g.lineTo(x+380,y+260);
        g.lineTo(x+325,y+287,5);
        g.closePath();
        g.stroke();
        g.fill()
    }

}

let app = new App();
app.runApplication();