const express = require('express');
const app = express();
const port = 3001;

// Define tus rutas aquí

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});