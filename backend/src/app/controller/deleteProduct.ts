import { Request, Response } from "express";
import { Product } from "../models/Product";

export const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;

  const product = await Product.findByIdAndDelete(productId);

  res.send(`Product ${productId} deleted with success`)
};

