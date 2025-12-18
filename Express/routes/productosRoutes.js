import { Router } from "express";
import {
  getProducts,
  addProduct,
  productById,
  update,
  borrar,
} from "../controller/productsController.js";

const router = Router();

//estas rutas partes desde /productos/get o add seria
router.get("/", getProducts);
router.post("/", addProduct);
router.get("/:id", productById);
router.put("/:id", update);
router.delete("/:id", borrar);

export default router;
