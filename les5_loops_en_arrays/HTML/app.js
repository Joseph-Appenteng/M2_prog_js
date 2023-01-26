class App
{
       runApplication()
  {
    let headers = document.getElementsByClassName("bandName");
    headers [0].innerHtml = "Lil baby"
    headers [1].innerHtml = "Pop smoke"
    headers [2].innerHtml = "Lil baby"

    Headers[0].innerHtml = arr[0];
    Headers[0].innerHtml = arr[1];
    Headers[0].innerHtml = arr[2];

    for(let i = 0; i < headers.length; i++){
        headers[i].innerHtml = arr[i];
  }
}
}
let app = new App();
app.runApplication();