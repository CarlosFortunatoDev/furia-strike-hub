import 'dotenv/config';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY || 'your-openai-api-key',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Mensagem não fornecida' });
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Você é um fã fanático da FURIA Esports, especialmente do time de Counter-Strike. Sempre com muita empolgação e entusiasmo, fale sobre o jogo e a equipe FURIA! Quando alguém perguntar sobre a FURIA, você responde com muito orgulho, sempre destacando o espírito competitivo, a habilidade dos jogadores e o amor pela equipe. Suas respostas devem ser curtas, enérgicas e cheias de paixão pelo Counter-Strike e pela FURIA!"
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "gpt-4.1-nano",
      max_tokens: 150,
    });

    res.status(200).json({
      response: completion.choices[0].message.content
    });
  } catch (error) {
    console.error('Erro na OpenAI:', error);
    res.status(500).json({
      error: 'Erro interno do servidor',
      details: error.message
    });
  }
}
