const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // Porta para o deploy

// Servir os arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal para servir o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicializar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
