
# 🤖 SERVIDOR DO CHAT IA FURIA CS2

Este é o backend que alimenta o **INSANO** chat de IA do site da FURIA CS2. Uma verdadeira máquina de respostas para os fãs mais engajados!

## ⚙️ CONFIGURAÇÃO

1. Instale as dependências (mais fácil que um HS com Desert Eagle):
```bash
npm install
```

2. Configure suas variáveis de ambiente:
- Copie o arquivo `.env.example` para `.env`
- A API Key já está configurada como padrão no código, mas se quiser usar uma diferente, adicione em `OPENAI_API_KEY` no arquivo `.env`

3. Inicie o servidor (mais rápido que um rush B):
```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3001`. GG!

## 🎮 ENDPOINTS

- `POST /api/chat`: Endpoint para enviar mensagens ao chat IA FURIA
  - Body: `{ "message": "sua pergunta sobre a FURIA aqui" }`
  - Resposta: `{ "response": "resposta do assistente FURIA" }`

## 🛡️ IMPORTANTE

O Assistente FURIA é treinado para:
- Responder apenas sobre CS2 e sobre a equipe FURIA
- Manter as respostas curtas e empolgantes
- Falar como um verdadeiro fã da FURIA
- Usar linguagem informal e acessível

GG WP e bora FURIA! 🔥
