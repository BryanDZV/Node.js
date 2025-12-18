//simulando
const products = [
  {
    id: 1,
    name: "Teclado mecánico RGB",
    description: "Teclado mecánico retroiluminado con switches Blue.",
    price: 59.99,
    stock: 12,
  },
  {
    id: 2,
    name: "Ratón inalámbrico",
    description: "Ratón ergonómico con conexión Bluetooth y USB.",
    price: 29.99,
    stock: 34,
  },
  {
    id: 3,
    name: "Monitor 27 pulgadas",
    description: "Monitor IPS 144Hz con resolución Full HD.",
    price: 189.99,
    stock: 5,
  },
  {
    id: 4,
    name: "Auriculares gaming",
    description: "Auriculares con micrófono con cancelación de ruido.",
    price: 39.99,
    stock: 22,
  },
];
export function getAllProduts() {
  return products;
}

export function createdProduct(productData) {
  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1, //obtenemos el id del ultimo producto econtrado por indice algo como 0.id
    ...productData, //spread operator par expandir en otro sitio
  };
  products.push(newProduct); //nuevo productos
  return newProduct;
}
