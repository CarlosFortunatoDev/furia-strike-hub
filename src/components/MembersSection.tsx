
import React from 'react';
import { Card, CardContent } from './ui/card';

const playerData = [
  {
    id: 1,
    name: "arT",
    fullName: "Andrei Piovezan",
    role: "Capitão / IGL",
    image: "https://dgvdyislmj77y.cloudfront.net/eyJidWNrZXQiOiJ0cmFkZWl0LXdpa2kiLCJrZXkiOiJwbGF5ZXJzL2FydC53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMzAwIiwiaGVpZ2h0IjpudWxsLCJmaXQiOiJjb3ZlciJ9LCJ3ZWJwIjp7ImVmZm9ydCI6MywicXVhbGl0eSI6ODB9fX0=",
    stats: {
      rating: "1.15",
      headshot: "48.2%",
      kdr: "1.24"
    },
    bio: "O líder destemido e estrategista conhecido pelo seu estilo de jogo agressivo."
  },
  {
    id: 2,
    name: "KSCERATO",
    fullName: "Kaike Cerato",
    role: "Rifler",
    image: "https://img-cdn.hltv.org/playerbodyshot/U6t0j2bJDKUR3mTI8rIqv7.png?ixlib=java-2.1.0&w=400&s=b5257c378b8122f415f21985855e95ca",
    stats: {
      rating: "1.29",
      headshot: "52.7%",
      kdr: "1.53"
    },
    bio: "Consistentemente um dos jogadores mais bem avaliados com excepcional precisão com rifle."
  },
  {
    id: 3,
    name: "yuurih",
    fullName: "Yuri Santos",
    role: "Rifler / Suporte",
    image: "https://img-cdn.hltv.org/playerbodyshot/i6UGhkYxrhutAOmWZT0-8O.png?ixlib=java-2.1.0&w=400&s=2cd696f6ff4baf5680a43d537214b6eb",
    stats: {
      rating: "1.24",
      headshot: "50.1%",
      kdr: "1.37"
    },
    bio: "Jogador versátil com capacidade excepcional de clutch e gameplay de suporte."
  },
  {
    id: 4,
    name: "chelo",
    fullName: "Marcelo Cespedes",
    role: "Rifler",
    image: "https://img-cdn.hltv.org/playerbodyshot/1UmLZkSSAfBosakeRR3gwZ.png?ixlib=java-2.1.0&w=400&s=4b513eb29f7896053a6996ef30575ed8",
    stats: {
      rating: "1.18",
      headshot: "54.3%",
      kdr: "1.31"
    },
    bio: "Fragger consistente com excelente controle de site e tomada de decisão."
  },
  {
    id: 5,
    name: "drop",
    fullName: "André Abreu",
    role: "AWPer",
    image: "https://images.steamusercontent.com/ugc/1834649355088417052/F26C0D0CACBD98AF3D6F642BCB35A733444E8F46/",
    stats: {
      rating: "1.17",
      headshot: "38.2%",
      kdr: "1.22"
    },
    bio: "AWPer ascendente com estilo de jogo agressivo e reflexos impressionantes."
  }
];

const MembersSection = () => {
  return (
    <section id="members" className="py-20 bg-secondary ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-furia-light mb-4">Nossos <span className="text-furia">Jogadores</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Conheça os jogadores talentosos que compõem o elenco de Counter-Strike da FURIA.
            Cada membro traz talentos e expertise únicos para criar um dos times mais formidáveis do cenário competitivo.
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
                  <p className="text-sm text-gray-400">Função</p>
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
