
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const highlightsData = [
  {
    id: 1,
    title: "FURIA vs Astralis - IEM Cologne 2023",
    thumbnail: "/highlight-1.jpg",
    views: "2.4M",
    duration: "14:22",
    date: "24 Jul, 2023",
    videoId: "example1"
  },
  {
    id: 2,
    title: "Melhores Jogadas FURIA 2023 - KSCERATO Ace",
    thumbnail: "/highlight-2.jpg",
    views: "1.8M",
    duration: "8:45",
    date: "15 Set, 2023",
    videoId: "example2"
  },
  {
    id: 3,
    title: "Compilação de Jogadas Agressivas do arT",
    thumbnail: "/highlight-3.jpg",
    views: "1.2M",
    duration: "10:17",
    date: "3 Out, 2023",
    videoId: "example3"
  },
  {
    id: 4,
    title: "FURIA Rumo ao Major - Melhores Momentos",
    thumbnail: "/highlight-4.jpg",
    views: "3.1M",
    duration: "18:05",
    date: "12 Nov, 2023",
    videoId: "example4"
  }
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="py-20 bg-furia-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-furia-light mb-4">Melhores <span className="text-furia">Momentos</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Reviva os momentos mais emocionantes das partidas competitivas da FURIA.
            De jogadas clutch a obras-primas estratégicas, testemunhe a habilidade e determinação que definem nosso time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {highlightsData.map((highlight) => (
            <Card key={highlight.id} className="bg-furia-gray/20 border-furia/20 overflow-hidden hover:border-furia transition-all duration-300">
              <div className="relative aspect-video overflow-hidden group cursor-pointer">
                <img 
                  src={highlight.thumbnail} 
                  alt={highlight.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x400/1a1a1a/FF5900?text=Destaque`;
                  }}
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-furia/80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
                
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {highlight.duration}
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-furia-light font-semibold mb-2 line-clamp-1">{highlight.title}</h3>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{highlight.views} visualizações</span>
                  <span>{highlight.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-furia hover:bg-furia/80 text-white px-8">
            Ver Todos os Destaques
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
