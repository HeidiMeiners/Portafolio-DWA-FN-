const express = require('express');
const cors = require('cors');
const app = express();

// Habilitar CORS para permitir solicitudes desde el frontend
app.use(cors());
app.use(express.json());

// Endpoint para las películas
app.get('/api/movies', (req, res) => {
  res.json([
    { id: 1, title: "Star Wars: A New Hope", year: 1977 },
    { id: 2, title: "Star Wars: The Empire Strikes Back", year: 1980 },
    { id: 3, title: "Star Wars: Return of the Jedi", year: 1983 },
    // Agrega aquí más películas según lo necesites
  ]);
});

// Definir el puerto en el que correrá el servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});