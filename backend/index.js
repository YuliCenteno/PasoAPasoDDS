const express = require('express');

// Crear servidor Express
const app = express();
app.use(express.json()); // para poder leer json en el body
const inicializarBase = require("./models/inicializarBase");  // inicializar base de datos

// Controlar ruta
app.get("/", (req, res) => {
  res.send("Backend inicial dds-backend!");
});

const categoriasmockRouter = require("./routes/categoriasmock");
app.use(categoriasmockRouter);

const categoriasRouter = require("./routes/categorias");
app.use(categoriasRouter);


// Levantar el servidor
const PORT = 3000;

app.locals.fechaInicio = new Date(); // fecha y hora inicio de aplicacion

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});