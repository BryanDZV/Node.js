import express from "express";
import dotenv from "dotenv";
import productosRoutes from "./routes/productosRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json()); // Para entender los cuerpos de las peticiones JSON

// Rutas para decirle que hay la ruta de rpoductos a express
app.use("/productos", productosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`servidor escuchando en el puerto ${PORT}`);
});
