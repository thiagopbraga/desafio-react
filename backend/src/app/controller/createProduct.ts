import { Request, Response } from "express";
import { Product } from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  const { codigo, nome, preco, descricao } = req.body;
  const product = new Product({
    codigo,
    nome,
    preco,
    descricao,
  });
  await product.save();
  res.send(product);
};
