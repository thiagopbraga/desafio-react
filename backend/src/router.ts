import { Router } from "express";
import { createProduct } from "./app/controller/createProduct";
import { listProducts } from "./app/controller/listProducts";
import { editProcuts } from "./app/controller/editProduct";
import { deleteProduct } from "./app/controller/deleteProduct";

export const router = Router();

router.get("/products", listProducts);
router.post("/products", createProduct);
router.patch("/products/:productId", editProcuts);
router.delete("/products/:productId", deleteProduct);
