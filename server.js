import express from "express";
import morgan from "morgan";
import "./config/database.js";
import router from "./config/routes.js";

const server = express();
const porta = 3003;

server.use(express.json());
server.use(morgan("tiny"));
server.use(router);

server.listen(porta, () =>{
  console.log(`Servidor tá rodando na porta ${porta}`)
});
