import express from "express";
import mongoose from "mongoose";
import { router } from "./router";
import cors from "cors";

mongoose
  .connect("mongodb://127.0.0.1:27017/products")
  .then(() => {
    const app = express();
    const port = 3001;
    console.log("Connectado ao MongoDB");
    app.use(cors());
    app.use(express.json());
    app.use(router);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Erro ao conectar ao MongoDB", err);
  });
