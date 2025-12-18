import {
  getAllProduts,
  createdProduct,
  getProductoById,
  updateProduct,
  deletebyId,
} from "../services/productsService.js";

//funcion para get
export function getProducts(req, res) {
  try {
    const allProducts = getAllProduts();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos" });
  }
}

//funcion para get by id
export function productById(req, res) {
  const id = Number(req.params.id);
  const product = getProductoById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
}

//funcion pra post
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

//funcion para put
export function update(req, res) {
  try {
    const id = Number(req.params.id);
    const data = req.body;
    const product = updateProduct(id, data);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "no se pudo actualizar" });
  }
}
//funcion para delete por id
export function borrar(req, res) {
  try {
    const id = Number(req.params.id);
    if (deletebyId(id)) {
      res.status(200).json({ message: "borrado" });
    } else {
      res.status(404).json({ message: "no hay un producto con ese id" });
    }
  } catch (error) {
    res.status(500).json({ message: "no se pudo borrar" });
  }
}
