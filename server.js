const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos (HTML, CSS, JS) desde la carpeta 'public'
app.use(express.static('public'));

// Conexión a MongoDB usando mongoose
mongoose.connect('mongodb://mongo:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch(err => {
  console.error('Error al conectar a MongoDB:', err);
});

// Rutas de ejemplo
app.get('/api/shooter', (req, res) => {
  res.json({ message: 'Bienvenido al shooter interactivo!' });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});