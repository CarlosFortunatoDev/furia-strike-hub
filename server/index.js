
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { OpenAI } = require('openai');

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize OpenAI with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'sk-your-api-key-here', // Substitua pelo seu API key real em um arquivo .env
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Mensagem não fornecida' });
    }
    
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Você é um assistente virtual da equipe FURIA de Counter-Strike. Seja útil, amigável e forneça informações sobre a equipe, jogadores, próximos jogos e dicas sobre CS. Respostas devem ser curtas (máximo de 2 parágrafos) e em Português do Brasil. Adicione sempre entusiasmo pela equipe FURIA."
        },
        { 
          role: "user", 
          content: message 
        }
      ],
      model: "gpt-4o",
      max_tokens: 150,
    });

    res.json({ 
      response: completion.choices[0].message.content 
    });
  } catch (error) {
    console.error('Erro ao processar mensagem:', error);
    res.status(500).json({ 
      error: 'Erro interno do servidor',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
