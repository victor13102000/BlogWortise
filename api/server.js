// Configuración del server
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const db= require('./db')
const router= require('./routes')
require('./models')


// logging middleware
app.use(morgan("tiny"));

// parsing middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);



db.sync({ force: false})
  .then(function () {
    // Recién ahora estamos seguros que la conexión fue exitosa
    app.listen(3001, () =>
      console.log("Servidor escuchando en el puerto 3001")
    );
  })
  .catch(console.error);