import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cardRoutes from './routes/cardRoutes.js';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api/cards', cardRoutes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`API REST rodando na porta ${port}`);
});
