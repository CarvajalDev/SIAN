//importar express
const express = require("express");
const path = require("path");
const routes = require("./routes");

const configs = require("./config");

//Mirar si la base de datos esta conectada
/*db.authenticate()
  .then(() => console.log("Base de datos CONECTADA"))
  .catch((error) => console.log(error));*/

//configurar express
const app = express();

//habilitar pug
app.set("view engine", "pug");

//añadir las vistas
app.set("views", path.join(__dirname, "./views"));

//cargar carpeta estatica Public
app.use(express.static("public"));

//Validar si estoy en desarrollo o produccion
const config = configs[app.get("env")];

//Creo variable para el sitio SIAN
app.locals.titulo = config.nombresitio;

//Muestra el año actual
app.use((req, res, next) => {
  const fecha = new Date();
  res.locals.fechaActual = fecha.getFullYear();
  return next();
});

//cargar las rustas
app.use("/", routes());

//configurar puerto del servidor
app.listen(3000);
