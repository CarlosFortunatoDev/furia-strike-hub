
import React from 'react';
import { Card, CardContent } from './ui/card';

const playerData = [
  {
    id: 1,
    name: "arT",
    fullName: "Andrei Piovezan",
    role: "Captain / IGL",
    image: "/player-art.png",
    stats: {
      rating: "1.15",
      headshot: "48.2%",
      kdr: "1.24"
    },
    bio: "The fearless leader and in-game strategist known for his aggressive playstyle."
  },
  {
    id: 2,
    name: "KSCERATO",
    fullName: "Kaike Cerato",
    role: "Rifler",
    image: "/player-kscerato.png",
    stats: {
      rating: "1.29",
      headshot: "52.7%",
      kdr: "1.53"
    },
    bio: "Consistently one of the highest-rated players with exceptional rifle accuracy."
  },
  {
    id: 3,
    name: "yuurih",
    fullName: "Yuri Santos",
    role: "Rifler / Support",
    image: "/player-yuurih.png",
    stats: {
      rating: "1.24",
      headshot: "50.1%",
      kdr: "1.37"
    },
    bio: "Versatile player with exceptional clutch capabilities and supportive gameplay."
  },
  {
    id: 4,
    name: "chelo",
    fullName: "Marcelo Cespedes",
    role: "Rifler",
    image: "/player-chelo.png",
    stats: {
      rating: "1.18",
      headshot: "54.3%",
      kdr: "1.31"
    },
    bio: "Consistent fragger with excellent site control and mid-round decision making."
  },
  {
    id: 5,
    name: "drop",
    fullName: "André Abreu",
    role: "AWPer",
    image: "/player-drop.png",
    stats: {
      rating: "1.17",
      headshot: "38.2%",
      kdr: "1.22"
    },
    bio: "Rising AWP star with aggressive playstyle and impressive reflexes."
  }
];

const MembersSection = () => {
  return (
    <section id="members" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-furia-light mb-4">Team <span className="text-furia">Members</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Meet the skilled players that make up FURIA's Counter-Strike roster. 
            Each member brings unique talents and expertise to create one of the most formidable teams in the competitive scene.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {playerData.map((player) => (
            <Card key={player.id} className="bg-furia-gray/20 border-furia/20 overflow-hidden hover:border-furia transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div className="h-64 relative overflow-hidden">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/400x500/1a1a1a/FF5900?text=${player.name}`;
                  }}
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-2xl font-bold text-furia">{player.name}</h3>
                  <p className="text-furia-light text-sm">{player.fullName}</p>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="text-furia-light mb-4">
                  <p className="text-sm text-gray-400">Role</p>
                  <p className="font-semibold">{player.role}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-furia-gray/30 rounded-md">
                    <p className="text-xs text-gray-400">Rating</p>
                    <p className="font-bold text-furia">{player.stats.rating}</p>
                  </div>
                  <div className="text-center p-2 bg-furia-gray/30 rounded-md">
                    <p className="text-xs text-gray-400">HS%</p>
                    <p className="font-bold text-furia">{player.stats.headshot}</p>
                  </div>
                  <div className="text-center p-2 bg-furia-gray/30 rounded-md">
                    <p className="text-xs text-gray-400">K/D</p>
                    <p className="font-bold text-furia">{player.stats.kdr}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-400">{player.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
