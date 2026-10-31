'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Responsibilities } from '@/components/Responsibilities';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'skills', 'projects', 'responsibilities', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const secId = sections[i];
        const el = document.getElementById(secId);
        if (el) {
          const top = el.offsetTop - offset;
          if (scrollY >= top) {
            setActiveSection(secId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolioCanvas">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Responsibilities />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
