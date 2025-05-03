
// This is a mock API endpoint for the AI chat
// In a real implementation, you would replace this with your backend API
// that connects to an AI service like OpenAI, Google Vertex AI, etc.

export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    // Simulate API processing delay
    setTimeout(() => {
      // Mock responses based on keywords in the message
      let response;

      const lowerCaseMessage = message.toLowerCase();

      if (lowerCaseMessage.includes('oi') || lowerCaseMessage.includes('olá') || lowerCaseMessage.includes('ola')) {
        response = 'Olá! Como posso ajudar você hoje?';
      }
      else if (lowerCaseMessage.includes('horário') || lowerCaseMessage.includes('horario') || lowerCaseMessage.includes('jogo')) {
        response = 'O próximo jogo da FURIA será contra a Team Liquid no dia 10 de maio às 15:00 (horário de Brasília).';
      }
      else if (lowerCaseMessage.includes('jogador') || lowerCaseMessage.includes('melhor') || lowerCaseMessage.includes('artilheiro')) {
        response = 'KSCERATO é considerado um dos melhores jogadores do time FURIA atualmente, com estatísticas impressionantes nos últimos torneios.';
      }
      else if (lowerCaseMessage.includes('ingresso') || lowerCaseMessage.includes('comprar') || lowerCaseMessage.includes('assistir')) {
        response = 'Você pode comprar ingressos para os eventos da FURIA através do nosso site oficial na seção de eventos. Também transmitimos todos os jogos em nossos canais oficiais da Twitch e YouTube.';
      }
      else {
        response = 'Obrigado pela sua mensagem! Nossa equipe está analisando sua dúvida e responderá o mais breve possível. Para informações mais detalhadas, visite nossa página de contato.';
      }

      res.status(200).json({ response });
    }, 1000); // Simulate a 1-second delay for API response

  } catch (error) {
    console.error('Erro no processamento da mensagem:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
