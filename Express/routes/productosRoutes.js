import { Router } from "express";
import { getProducts, addProduct } from "../controller/productsController.js";

const router = Router();

//estas rutas partes desde /productos/get o add seria
router.get("/", getProducts);
router.post("/", addProduct);

export default router;
