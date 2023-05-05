import { model, Schema } from "mongoose";

const data = new Date();

const productSchema = new Schema({
  codigo: Number,
  descricao: String,
  nome: String,
  preco: String,
  data_criacao: {
    type: String,
    default: data.toLocaleDateString(),
  },
});

export const Product = model("Product", productSchema);
