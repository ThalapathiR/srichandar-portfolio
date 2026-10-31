'use client';

import React, { useState, useEffect } from 'react';
import styles from './BackToTop.module.css';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      className={`${styles.backToTop} ${visible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top of page"
    >
      <ArrowUp size={20} />
    </button>
  );
};

