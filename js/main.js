/*fetch("./js/ID.json")
.then(res => res.json())
.then(data => console.log(data[random].name))*/
var numeroPJ=0;
var name="";
var url="";

function callSuperHeroe1(){
    const key = "10219098893255282";
    var counter = 1;
    for (var i=0;i<3;i++){
        var id =Math.floor(Math.random()*730);
        fetch(`https://superheroapi.com/api.php/${key}/${id}`)
      .then((response) => {
         const contentType = response.headers.get('content-type');
         if (!contentType || !contentType.includes('application/json')) {
           throw new TypeError("Oops, we haven't got JSON!");
         }
         return response.json();
      })
      .then((data) => {
          /* process your data further */
          name=data.name;
          url=data.image.url;
          cambiarPortada(url,counter);
          cambiarNombre(name,counter);
          counter++;

      })
      .catch((error) => console.error(error));    
    }
    
}

function cambiarPortada(url,numeroPJ){
    document.getElementById("portada"+numeroPJ).src=url;
  }
function cambiarNombre(name,numeroPJ){
    document.getElementById("name"+numeroPJ).innerHTML=name;
}
function randomSuperPortada(){
    callSuperHeroe1();
}
function comicVine(){
  fetch(`https://comicvine.gamespot.com/api.php/characters/?api_key=aead5e3fc45f4a8aaade28c0cdc6a27210eb7b39&format=json&sort=batman`)
      .then((response) => {
         const contentType = response.headers.get('content-type');
         if (!contentType || !contentType.includes('application/json')) {
           throw new TypeError("Oops, we haven't got JSON!");
         }
         return response.json();
      })
      .then((data) => {
          /* process your data further */
          console.log(data);

      })
      .catch((error) => console.error(error)); 
}




randomSuperPortada();
comicVine();