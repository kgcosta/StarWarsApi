import "../Services/StarWarsService.js";
import mongoose from "mongoose";
import planetsSchema from "../Models/PlanetModel.js";
import FilmsAppearance from "../Services/StarWarsService.js";

const planetModel = mongoose.model("Planeta", planetsSchema);

class PlanetController {

    async newPlanet(req, res) {
      const filmsAppearance = new FilmsAppearance(); 

    try {
      // Chamada do retorno da api na pasta services // chama o parâmetro de entrada planeta. 
      const quantityFilms = await filmsAppearance.filmsReturn(req.body.Planeta);
        
      // Criação de variável para implementar o object id. 
      const id = new mongoose.Types.ObjectId();
      const planetId = Object.assign({
          _id: id
        }, req.body, {Filmes: quantityFilms});

      // Criação da variável planet para no schema para insert no MongoDB
      const planet = new planetModel(planetId);

      // Realizar o insert no MongoDB
      planet.save().then(() => {
          res.status(201).send(planet);
      }).catch(err => {
        // Broken E11000 duplicate key - Se o planeta estiver em duplicidade retorna o erro. 
        if(err.code == 11000) {
          //console.log(err);
          res.status(400).json({"error_message": "Já existe o planeta, cadastrado não foi!"});
        };
      });
    
    } catch (error) {
      res.status(500).json({"error_message":"Cadastrar planeta, possível não foi!!"});
    };
  };

  async showPlanet(req, res){
    
    planetModel.find((err, planets) => {
      if (err){
        res.status(500).json({"error_message":"Possível não foi, planeta achar!"});
      };
        res.json(planets);
    });
  };  
    
  async getPlanetById(req, res) {
    planetModel.findById(req.params.id, (err, planet) => {
      if (err) {
        res.status(500).json({"error_message": "Possível não foi, planeta achar!"});
      };
        res.json(planet);
    });
  };

  async getPlanetByName(req,res) { 
    planetModel.findOne({Planeta: req.params.name}, (err, planet) => {
      if (err) {
        res.status(500).json({"error_message":"Possível não foi, planeta achar!"});
      };
        res.json(planet);
    });
  };

  async deletePlanetByName(req,res) {
    planetModel.deleteOne({Planeta: req.params.name}, (err, planet) => { ;
      if (err) {
        res.status(500).json({"error_message":"Deletado não foi!"});
      };
        res.json({"message":"Sucesso é. Deletado o planeta!"});
    });    
  };
};

export default PlanetController;
