// configurações do bd 
import mongoose from "mongoose";
//import router from "../../config/routes.js"

// conectar o banco de dados 
const DB_URL = 'mongodb+srv://admin:coxinha@cluster0.hryry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//para ativar a conexão com o banco de dados
mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });

//Mostrar conexão com o banco 
export default mongoose.connection.once("open", () => {
  console.log("Instância conectada ao MongoDB!")
});

