
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';

const tipsData = {
  strategy: [
    {
      id: "s1",
      title: "Fundamentos de Controle de Mapa",
      content: "No CS competitivo, controlar áreas-chave do mapa é essencial. Concentre-se em garantir o controle do meio em mapas como Mirage e Dust2 para dividir as defesas e criar múltiplas opções de ataque.",
      difficulty: "Iniciante"
    },
    {
      id: "s2",
      title: "Gerenciamento Econômico",
      content: "Aprenda quando economizar, forçar compra ou fazer compra completa. Entender a economia é fundamental - às vezes economizar para uma compra completa na próxima rodada é melhor do que forçar com equipamento limitado.",
      difficulty: "Intermediário"
    },
    {
      id: "s3",
      title: "Execução de Invasões de Bombsite",
      content: "Sincronize o uso de utilidades com sua equipe. Smokes devem bloquear linhas de visão importantes, flashes devem cegar defensores, e molotovs devem limpar cantos apertados. O timing é tudo.",
      difficulty: "Avançado"
    }
  ],
  aim: [
    {
      id: "a1",
      title: "Posicionamento da Mira",
      content: "Sempre mantenha sua mira na altura da cabeça e pré-mire em posições comuns de inimigos. Isso reduz a distância que você precisa mover seu mouse quando um inimigo aparece.",
      difficulty: "Iniciante"
    },
    {
      id: "a2",
      title: "Counter-Strafing",
      content: "Domine a arte de parar seu movimento instantaneamente com counter-strafing. Isso permite tiros precisos sem o atraso de parar completamente.",
      difficulty: "Intermediário"
    },
    {
      id: "a3",
      title: "Padrões de Controle de Spray",
      content: "Cada arma tem um padrão de spray único. Pratique o controle desses padrões em mapas de treino para manter a precisão durante sprays prolongados.",
      difficulty: "Avançado"
    }
  ],
  utility: [
    {
      id: "u1",
      title: "Posições Básicas de Smoke",
      content: "Aprenda posições essenciais de granadas de fumaça para mapas no pool ativo. Smokes bem colocadas podem cortar linhas de visão e criar passagens seguras para sua equipe.",
      difficulty: "Iniciante"
    },
    {
      id: "u2",
      title: "Técnicas de Flash",
      content: "Pop flashes são lançadas de modo a explodirem com aviso mínimo para inimigos. Aprenda a rebater flashes em paredes e coordenar com companheiros para máxima eficácia.",
      difficulty: "Intermediário"
    },
    {
      id: "u3",
      title: "Uso Avançado de Molotov",
      content: "Use molotovs para negar defusas em situações pós-plante ou forçar inimigos a sair de posições defensivas. O timing desses elementos de utilidade pode ganhar rodadas cruciais.",
      difficulty: "Avançado"
    }
  ]
};

const TipsSection = () => {
  const [activeTab, setActiveTab] = useState("strategy");

  return (
    <section id="tips" className="py-20 bg-gradient-to-b from-secondary to-furia-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-furia-light mb-4">Dicas de <span className="text-furia-yellow">Pro</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Melhore suas habilidades no Counter-Strike com dicas e estratégias profissionais diretamente dos jogadores da FURIA.
            Seja você iniciante ou buscando refinar seu gameplay, nossos conselhos podem ajudar a elevar suas habilidades ao próximo nível.
          </p>
        </div>

        <Tabs defaultValue="strategy" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-furia-gray/30 rounded-lg mb-8">
            <TabsTrigger
              value="strategy"
              className="data-[state=active]:bg-furia data-[state=active]:text-white"
              onClick={() => setActiveTab("strategy")}
            >
              Estratégia
            </TabsTrigger>
            <TabsTrigger
              value="aim"
              className="data-[state=active]:bg-furia data-[state=active]:text-white"
              onClick={() => setActiveTab("aim")}
            >
              Mira & Movimento
            </TabsTrigger>
            <TabsTrigger
              value="utility"
              className="data-[state=active]:bg-furia data-[state=active]:text-white"
              onClick={() => setActiveTab("utility")}
            >
              Uso de Utilidades
            </TabsTrigger>
          </TabsList>

          <TabsContent value="strategy" className="space-y-6">
            {tipsData.strategy.map(tip => (
              <Card key={tip.id} className="bg-furia-gray/20 border-furia/20">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-furia-light">{tip.title}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-furia-dark text-furia">{tip.difficulty}</span>
                  </div>
                  <p className="text-gray-400">{tip.content}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="aim" className="space-y-6">
            {tipsData.aim.map(tip => (
              <Card key={tip.id} className="bg-furia-gray/20 border-furia/20">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-furia-light">{tip.title}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-furia-dark text-furia">{tip.difficulty}</span>
                  </div>
                  <p className="text-gray-400">{tip.content}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="utility" className="space-y-6">
            {tipsData.utility.map(tip => (
              <Card key={tip.id} className="bg-furia-gray/20 border-furia/20">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-furia-light">{tip.title}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-furia-dark text-furia">{tip.difficulty}</span>
                  </div>
                  <p className="text-gray-400">{tip.content}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TipsSection;
