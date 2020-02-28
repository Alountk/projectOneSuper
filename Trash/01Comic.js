//https://superheroapi.com/index.html
//token 10219098893255282
//https://superheroapi.com/api/
//https://superheroapi.com/api/10219098893255282

//Para sacar los primeros 10 nombres
for (let i=1;i<=10;i++){
    getSuperHeroe(i);

}

function getSuperHeroe(number){
    fetch(`https://superheroapi.com/api/10219098893255282/${number}`)
     .then(function(response) {
       return response.json();
     })
     .then(function(json) {
         if (json.name)
       console.log(json.name);
     });
   };

   json.powerstats.strength

   //Comic Vine https://comicvine.gamespot.com/api/volumes/?api_key=aead5e3fc45f4a8aaade28c0cdc6a27210eb7b39
   //Token=aead5e3fc45f4a8aaade28c0cdc6a27210eb7b39
   //rl/characters/?api_key=your_apikey&sort=name
   //https://comicvine.gamespot.com/api/characters/?api_key=aead5e3fc45f4a8aaade28c0cdc6a27210eb7b39
   //https://www.superheroapi.com/api.php/10219098893255282/search/superman Para busqueda

  fetch(`https://comicvine.gamespot.com/api/characters/?api_key=aead5e3fc45f4a8aaade28c0cdc6a27210eb7b39&format=json`)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
  });