
// API endpoint para o chat da IA FURIA
import OpenAI from 'openai';

// Inicializar OpenAI com API key
const openai = new OpenAI({
  apiKey: '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',
});

export default async function handler(req, res) {
  // Apenas aceita requisições POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Mensagem não fornecida' });
    }

    // Usando try/catch para capturar erros específicos da OpenAI
    try {
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

      // Resposta bem-sucedida da API
      return res.status(200).json({ 
        response: completion.choices[0].message.content 
      });
    } catch (openaiError) {
      console.error('Erro na chamada da OpenAI:', openaiError);
      
      // Fallback para respostas pré-definidas se a OpenAI falhar
      let response;
      const lowerCaseMessage = message.toLowerCase();

      if (lowerCaseMessage.includes('oi') || lowerCaseMessage.includes('olá') || lowerCaseMessage.includes('ola')) {
        response = 'Olá! Como posso ajudar você hoje? Estou aqui para falar sobre a FURIA e CS2!';
      }
      else if (lowerCaseMessage.includes('horário') || lowerCaseMessage.includes('horario') || lowerCaseMessage.includes('jogo')) {
        response = 'O próximo jogo da FURIA será contra a Team Liquid no dia 10 de maio às 15:00 (horário de Brasília). Bora FURIA! 🔥';
      }
      else if (lowerCaseMessage.includes('jogador') || lowerCaseMessage.includes('melhor') || lowerCaseMessage.includes('artilheiro')) {
        response = 'KSCERATO é considerado um dos melhores jogadores do time FURIA atualmente, com estatísticas impressionantes nos últimos torneios. Um monstro em ação!';
      }
      else if (lowerCaseMessage.includes('ingresso') || lowerCaseMessage.includes('comprar') || lowerCaseMessage.includes('assistir')) {
        response = 'Você pode comprar ingressos para os eventos da FURIA através do nosso site oficial na seção de eventos. Também transmitimos todos os jogos em nossos canais oficiais da Twitch e YouTube.';
      }
      else {
        response = 'Obrigado pela sua mensagem! A FURIA sempre busca se conectar com os fãs. Para mais informações sobre nosso time, partidas e eventos, visite nosso site oficial!';
      }

      return res.status(200).json({ response });
    }
  } catch (error) {
    console.error('Erro no processamento da mensagem:', error);
    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      details: error.message 
    });
  }
}
