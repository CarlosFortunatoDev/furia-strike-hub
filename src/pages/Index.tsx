
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MembersSection from '../components/MembersSection';
import HighlightsSection from '../components/HighlightsSection';
import TipsSection from '../components/TipsSection';
import UpcomingMatches from '../components/UpcomingMatches';
import Footer from '../components/Footer';
import AIChat from '../components/AIChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <UpcomingMatches />
      <MembersSection />
      <HighlightsSection />
      <TipsSection />
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
