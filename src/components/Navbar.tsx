'use client';

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Works', href: '#projects', id: 'projects' },
    { label: 'Impact', href: '#responsibilities', id: 'responsibilities' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#home" className={styles.brand} aria-label="Srichandar Portfolio Home">
          {portfolioData.name}
          <span className={styles.brandDot} aria-hidden="true">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navLinks}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};
