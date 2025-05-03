import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatHandler from '../api/chat.js'; // .js é necessário em ESM

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', chatHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
