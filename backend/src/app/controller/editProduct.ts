import { Request, Response } from "express";
import { MongoClient, ObjectId } from "mongodb";

export const editProcuts = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const id = new ObjectId(productId);
  const bodyReq = req.body;

  const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
  const db = client.db("products");
  const products = db.collection("products");

  const result = await products.findOneAndUpdate(
    { _id: id },
    { $set: { ...bodyReq } }
  );

  client.close();
  res.send("Produto editado com sucesso");
};
