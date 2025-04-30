
# FURIA AI Chat Server

Este é o servidor backend para o chat AI do site FURIA CS.

## Configuração

1. Instale as dependências:
```bash
npm install
```

2. Configure suas variáveis de ambiente:
- Copie o arquivo `.env.example` para `.env`
- Adicione sua chave API da OpenAI em `OPENAI_API_KEY`

3. Inicie o servidor:
```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3001`.

## Endpoints

- `POST /api/chat`: Endpoint para enviar mensagens ao chat AI
  - Body: `{ "message": "sua mensagem aqui" }`
  - Resposta: `{ "response": "resposta do AI" }`
