import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MembersSection from '../components/MembersSection';
import HighlightsSection from '../components/HighlightsSection';
import TipsSection from '../components/TipsSection';
import UpcomingMatches from '../components/UpcomingMatches';
import Footer from '../components/Footer';
import AIChat from '../components/AIChat';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar activeSection={activeSection} />
      <section id="hero">
        <Hero />
      </section>
      <section id="matches">
        <UpcomingMatches />
      </section>
      <section id="members">
        <MembersSection />
      </section>
      <section id="highlights">
        <HighlightsSection />
      </section>
      <section id="tips">
        <TipsSection />
      </section>
      <section id="footer">
        <Footer />
      </section>
      <AIChat />
    </div>
  );
};

export default Index;
