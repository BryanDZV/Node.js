import { getAllProduts, createdProduct } from "../services/productsService.js";

export function getProducts(req, res) {
  try {
    const allProducts = getAllProduts();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos" });
  }
}

export function addProduct(req, res) {
  try {
    //logica para añadir producto
    const { name, description, price, stock } = req.body; //sacamos valor por destructurin
    if (!name || !description || price == null || stock == null) {
      return res.status(400).json({ message: "Faltan campos requeridos" });
    }
    const newProduct = createdProduct({ name, description, price, stock });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el producto" });
  }
}
