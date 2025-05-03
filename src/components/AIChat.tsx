
import React, { useState, useRef, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { MessageSquare, Send, X } from 'lucide-react';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { toast } from './ui/sonner';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Olá! Sou o assistente virtual da FURIA. Como posso ajudar você hoje?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      setTimeout(() => {
        scrollArea.scrollTop = scrollArea.scrollHeight;
      }, 100);
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage;
    setInputMessage('');

    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Falha na comunicação com o servidor');
      }

      const data = await response.json();

      // Add AI response to chat
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      toast.error('Não foi possível conectar ao chat. Tente novamente mais tarde.');

      // Add error message to chat
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Desculpe, estou enfrentando dificuldades técnicas no momento. Por favor, tente novamente mais tarde.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            className="rounded-full w-16 h-16 bg-furia hover:bg-furia/90 shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            <MessageSquare className="w-7 h-7" />
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="right"
          className="w-[90%] sm:w-[380px] h-[500px] rounded-t-lg flex flex-col bottom-0 top-auto mt-auto mb-20 sm:mb-6"
        >
          <SheetHeader className="border-b pb-2">
            <div className="flex justify-between items-center">
              <SheetTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-furia" />
                Chat FURIA
              </SheetTitle>
            </div>
          </SheetHeader>

          <ScrollArea
            className="flex-1 pr-4 my-4"
            ref={scrollAreaRef as React.RefObject<HTMLDivElement>}
          >
            <div className="flex flex-col gap-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-furia text-white self-end'
                      : 'bg-secondary text-white self-start'
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {isLoading && (
                <div className="bg-secondary text-white p-3 rounded-lg self-start max-w-[80%]">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <form onSubmit={handleSubmit} className="border-t pt-4 flex items-center gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !inputMessage.trim()}
              className="bg-furia hover:bg-furia/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AIChat;
