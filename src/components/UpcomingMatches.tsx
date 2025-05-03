
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const matchesData = [
  {
    id: 1,
    opponent: "Natus Vincere",
    opponentLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Natus_Vincere_logo.png",
    date: "15 de Maio, 2025",
    time: "18:00 CEST",
    tournament: "ESL Pro League",
    streamLink: "https://www.twitch.tv/ESLCS"
  },
  {
    id: 2,
    opponent: "Team Liquid",
    opponentLogo: "https://upload.wikimedia.org/wikipedia/pt/4/4b/Teamliquid_logo_blue.png?20220910162021",
    date: "18 de Maio, 2025",
    time: "20:30 CEST",
    tournament: "BLAST Premier",
    streamLink: "https://www.twitch.tv/blastpremier"
  },
  {
    id: 3,
    opponent: "G2 Esports",
    opponentLogo: "https://upload.wikimedia.org/wikipedia/pt/2/23/G2_Esports_logo.png",
    date: "22 de Maio, 2025",
    time: "19:15 CEST",
    tournament: "ESL Pro League",
    streamLink: "https://www.twitch.tv/ESLCS"
  }
];

const UpcomingMatches = () => {
  return (
    <section id='matches' className="to-furia-dark py-20 bg-furia-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-furia-light mb-4">Próximas <span className="text-furia">Partidas</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Não perca as próximas batalhas da FURIA no cenário competitivo.
            Marque em seu calendário e sintonize para apoiar o time nessas partidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {matchesData.map((match) => (
            <Card key={match.id} className="bg-furia-gray/20 border-furia/20 overflow-hidden">
              <CardContent className="p-6">
                <div className="text-xs text-furia mb-4">{match.tournament}</div>

                <div className="flex items-center justify-between mb-6">
                  {/* FURIA */}
                  <div className="flex flex-col items-center">
                    <img
                      src="/furia-logo.png"
                      alt="Logo FURIA"
                      className="h-16 w-16 object-contain mb-2"
                      onError={(e) => {
                        e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png";
                      }}
                    />
                    <span className="font-bold text-furia-light">FURIA</span>
                  </div>

                  {/* VS */}
                  <div className="text-2xl font-bold text-gray-500">VS</div>

                  {/* Opponent */}
                  <div className="flex flex-col items-center">
                    <img
                      src={match.opponentLogo}
                      alt={`Logo ${match.opponent}`}
                      className="h-16 w-16 object-contain mb-2"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/80x80/1a1a1a/ffffff?text=${match.opponent}`;
                      }}
                    />
                    <span className="font-bold text-gray-400">{match.opponent}</span>
                  </div>
                </div>

                <div className="bg-black/30 p-3 rounded-lg mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Data:</span>
                    <span className="text-furia-light">{match.date}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-400">Horário:</span>
                    <span className="text-furia-light">{match.time}</span>
                  </div>
                </div>

                <a href={match.streamLink} target='_blank'><Button className="w-full bg-furia hover:bg-furia/80 text-white">
                  Assistir Transmissão
                </Button></a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;
