import axios from "axios"; 

class FilmsAppearance {

  async filmsReturn (planeta){
  
    let achei = false;
    let filmsNumber = 0 ;
    //console.log(planeta)
    for (let i = 1;  i <= 6; i++)  {

      const consumeApi = await axios ({
        url: `htps://swapi.dev/api/planets/?page=${i}`,
        method: 'GET',
      }); 
        //percorre a lista de results
        for (let j = 0; j < consumeApi.data.results.length; j++) {
          
          //verifica de se o retorno bate com o planeta requisitado
          if(consumeApi.data.results[j].name === planeta) {
              
              //variável para validar se o valor foi encontrado; 
              achei = true;
              filmsNumber = consumeApi.data.results[j].films.length;
              //console.log(consumeApi.data.results[j].films.length);
              break;
          } else {
              achei = false;
              continue; 
          };
        };
        if (achei == true ) {
          break;
        };      
    };
    //console.log(filmsNumber);
    return filmsNumber;
  }; 
}; 

export default FilmsAppearance; 
   



 