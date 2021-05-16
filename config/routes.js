import express from "express";
import PlanetController from "../app/Controllers/PlanetController.js";

// acessar o router do express
const router = express.Router(); 

//instanciar a classe Planet 
const planetController = new PlanetController();

// Rota para o post
router.post('/planet', async (req,res) => {
    planetController.newPlanet(req, res);
});

// Rota para buscar o planeta
router.get('/planets', async (req,res) => {
  planetController.showPlanet(req, res);
});

// Rota para buscar o planeta pelo id
router.get('/planet/id/:id', async (req,res) => {
  planetController.getPlanetById(req, res);
});

// Rota para buscar pelo nome
router.get('/planet/name/:name', async (req,res) => {
  planetController.getPlanetByName(req, res);
});

// Rota para deletar um planeta
router.delete('/planet/name/:name', async (req,res) => {
  planetController.deletePlanetByName(req, res);
});

export default router;
