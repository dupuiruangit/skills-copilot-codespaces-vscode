const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor de comentários!');
});

// Rota para listar comentários
app.get('/comments', (req, res) => {
    res.json([
        { id: 1, text: 'Primeiro comentário' },
        { id: 2, text: 'Segundo comentário' }
    ]);
});

// Rota para criar um novo comentário
app.post('/comments', (req, res) => {
    const comment = req.body;
    // Aqui você adicionaria lógica para salvar o comentário
    res.status(201).json({ message: 'Comentário criado', comment });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});