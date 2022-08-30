// Configuración del server
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const db= require('./db')
const router= require('./routes')
require('./models')
const {port} = require('./config/config')



app.use(morgan("tiny"));


app.use(express.json());
app.use(cookieParser());

app.use("/api", router);



db.sync({ force: false})
  .then(function () {
    app.listen(port || 3001, () =>
      console.log(`Servidor escuchando en el puerto ${port || 3001}`)
    );
  })
  .catch(console.error);