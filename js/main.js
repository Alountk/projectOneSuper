/*fetch("./js/ID.json")
.then(res => res.json())
.then(data => console.log(data[random].name))*/
var numeroPJ=0;
var name="";
var url="";

function callSuperHeroe1(){
    console.log(numeroPJ);
    
    const key = "10219098893255282";
    console.log(`https://superheroapi.com/api.php/${key}/${id}`);
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
    console.log(numeroPJ,url);
    console.log(document.getElementById("portada"+numeroPJ).src);
    document.getElementById("portada"+numeroPJ).src=url;
  }
function cambiarNombre(name,numeroPJ){
    console.log(name,url);
    document.getElementById("name"+numeroPJ).innerHTML=name;
}

function randomSuperPortada(){
    callSuperHeroe1();
}
randomSuperPortada();
