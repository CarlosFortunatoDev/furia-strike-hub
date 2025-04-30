
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const matchesData = [
  {
    id: 1,
    opponent: "Natus Vincere",
    opponentLogo: "/navi-logo.png",
    date: "May 15, 2025",
    time: "18:00 CEST",
    tournament: "ESL Pro League",
    streamLink: "#"
  },
  {
    id: 2,
    opponent: "Team Liquid",
    opponentLogo: "/liquid-logo.png",
    date: "May 18, 2025",
    time: "20:30 CEST",
    tournament: "BLAST Premier",
    streamLink: "#"
  },
  {
    id: 3,
    opponent: "G2 Esports",
    opponentLogo: "/g2-logo.png",
    date: "May 22, 2025",
    time: "19:15 CEST",
    tournament: "ESL Pro League",
    streamLink: "#"
  }
];

const UpcomingMatches = () => {
  return (
    <section className="py-20 bg-furia-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-furia-light mb-4">Upcoming <span className="text-furia">Matches</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Don't miss FURIA's next battles on the competitive stage. 
            Mark your calendars and tune in to support the team in these upcoming matches.
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
                      alt="FURIA Logo" 
                      className="h-16 w-16 object-contain mb-2"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/80x80/000000/FF5900?text=FURIA";
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
                      alt={`${match.opponent} Logo`}
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
                    <span className="text-gray-400">Date:</span>
                    <span className="text-furia-light">{match.date}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-400">Time:</span>
                    <span className="text-furia-light">{match.time}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-furia hover:bg-furia/80 text-white">
                  Watch Stream
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-furia text-furia hover:bg-furia/10">
            View Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;
