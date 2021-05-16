import mongoose from "mongoose";

const planetsSchema = mongoose.Schema({
  
  _id: mongoose.Schema.Types.ObjectId,
  Planeta: {
    type: String,
    unique: true
  },
  Clima: String,
  Terreno: String,
  Filmes: String
});

const planetModel = mongoose.model("Planeta", planetsSchema);

export default planetsSchema;

