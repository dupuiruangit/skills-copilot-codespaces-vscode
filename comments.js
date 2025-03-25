// comments.js
const express = require('express');
const app = express();

// Rota principal
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});