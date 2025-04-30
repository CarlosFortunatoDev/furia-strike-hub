
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';

const tipsData = {
  strategy: [
    {
      id: "s1",
      title: "Map Control Basics",
      content: "In competitive CS, controlling key areas of the map is essential. Focus on securing mid control on maps like Mirage and Dust2 to split defensive setups and create multiple attack options.",
      difficulty: "Beginner"
    },
    {
      id: "s2",
      title: "Economic Management",
      content: "Learn when to save, force buy, or full buy. Understanding the economy is critical - sometimes saving for a full buy next round is better than forcing with limited equipment.",
      difficulty: "Intermediate"
    },
    {
      id: "s3",
      title: "Executing Site Takes",
      content: "Synchronize utility usage with your team. Smokes should block key sightlines, flashes should blind defenders, and molotovs should clear tight corners. Timing is everything.",
      difficulty: "Advanced"
    }
  ],
  aim: [
    {
      id: "a1",
      title: "Crosshair Placement",
      content: "Always keep your crosshair at head level and pre-aimed at common enemy positions. This reduces the distance you need to move your mouse when an enemy appears.",
      difficulty: "Beginner"
    },
    {
      id: "a2",
      title: "Counter-Strafing",
      content: "Master the art of stopping your movement instantly by counter-strafing. This allows for accurate shots without the delay of coming to a complete stop.",
      difficulty: "Intermediate"
    },
    {
      id: "a3",
      title: "Spray Control Patterns",
      content: "Each weapon has a unique spray pattern. Practice controlling these patterns on training maps to maintain accuracy during extended sprays.",
      difficulty: "Advanced"
    }
  ],
  utility: [
    {
      id: "u1",
      title: "Basic Smoke Lineups",
      content: "Learn essential smoke grenade lineups for maps in the active duty pool. Properly placed smokes can cut off sightlines and create safe passage for your team.",
      difficulty: "Beginner"
    },
    {
      id: "u2",
      title: "Flash Techniques",
      content: "Pop flashes are thrown so they explode with minimal warning for enemies. Learn to bank flashes off walls and coordinate with teammates for maximum effectiveness.",
      difficulty: "Intermediate"
    },
    {
      id: "u3",
      title: "Advanced Molotov Usage",
      content: "Use molotovs to deny defuses in post-plant situations or force enemies out of defensive positions. The timing of these utility elements can win crucial rounds.",
      difficulty: "Advanced"
    }
  ]
};

const TipsSection = () => {
  const [activeTab, setActiveTab] = useState("strategy");
  
  return (
    <section id="tips" className="py-20 bg-gradient-to-b from-secondary to-furia-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-furia-light mb-4">Pro <span className="text-furia">Tips</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Improve your Counter-Strike skills with professional tips and strategies directly from FURIA players. 
            Whether you're just starting or looking to refine your gameplay, our advice can help take your skills to the next level.
          </p>
        </div>
        
        <Tabs defaultValue="strategy" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-furia-gray/30 rounded-lg mb-8">
            <TabsTrigger 
              value="strategy" 
              className="data-[state=active]:bg-furia data-[state=active]:text-white"
              onClick={() => setActiveTab("strategy")}
            >
              Strategy
            </TabsTrigger>
            <TabsTrigger 
              value="aim" 
              className="data-[state=active]:bg-furia data-[state=active]:text-white"
              onClick={() => setActiveTab("aim")}
            >
              Aim & Movement
            </TabsTrigger>
            <TabsTrigger 
              value="utility" 
              className="data-[state=active]:bg-furia data-[state=active]:text-white"
              onClick={() => setActiveTab("utility")}
            >
              Utility Usage
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
