function callSuperHeroe1(){
    const key = "10219098893255282";
    var counter = 1;
    for (var i=0;i<5;i++){
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
          console.log(name);
          url=data.image.url;
          console.log(url);
          fullName=data.biography.fullname;
          console.log(fullName);
          aliases=data.biography.aliases;
          console.log(aliases);
          birth=data.biography.place-of-birth;
          console.log(birth);
          altura=data.appearance.height;
          console.log(altura);
          counter++;

      })
      .catch((error) => console.error(error));    
    }
    
}

callSuperHeroe1();