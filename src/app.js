import express from "express";
import { __dirname } from "./utils.js";
import { routerProducts } from "./routes/products.router.js";
import { routerCarts } from "./routes/carts.router.js";
// import handlebars from "express-handlebars";

const app = express();
const port = 8080;

//CONFIGURACION DEL MOTOR DE HANDLEBARS
// app.engine("handlebars", handlebars.engine());
// app.set("views", __dirname + "/views");
// app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/api/products", routerProducts);
app.use("/api/carts", routerCarts);

// app.use("/vista/productos", routerVistaProductos);

app.listen(port, () => console.log("Server in the port: " + port));
