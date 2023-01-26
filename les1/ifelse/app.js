class App
{
    runApplication()
   {
    let title = document.getElementById("newstitle");
    let randomGetal = Math.random()
    
    if (randomGetal== 0)
    {
      title.style.backgroundColor = "#FFFF00";
    }
    else if (randomGetal< 0.2)
    {
      title.style.backgroundColor = "#DDA0DD";
    }    
    else if (randomGetal < 0.6)
    {
       title.style.backgroundColor = "#7CFC00";
    }    
    else if (randomGetal < 0.8)
    {
       title.style.backgroundColor = "#00FFFF";
    }
    else{
       title.style.background = "#7B68EE";
    }
    {let appnaam = "Discord";
    let versienummer = 0.9;
    let versiedatum = "12-09-2022";
    let autheur = "Joseph";
    let copyright = "That includes such things as manuscripts, books, phonorecords, cards,"
      "disks, film, and tapes are among some of the written materials that are considered protected under copyright law.";
    let distributeur = "Amazon"
    let darkmode = true
    console.log("hello world!")
    console.log(appnaam)
    console.log(versienummer)
    console.log(versiedatum)
    console.log(autheur)
    console.log(copyright)
    console.log(distributeur)
    console.log(darkmode)
   }
   }
}

let app = new App();
app.runApplication();