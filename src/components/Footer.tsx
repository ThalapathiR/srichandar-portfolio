import React from 'react';
import styles from './Footer.module.css';
import { portfolioData } from '@/data/portfolioData';
import { Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <Cpu size={20} color="var(--accent)" />
              <span>
                {portfolioData.name}
                <span className={styles.brandDot} aria-hidden="true">.</span>
              </span>
            </div>
            <p className={styles.brandBio}>
              {portfolioData.role}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className={styles.linksCol}>
            <span className={styles.linksTitle}>Quick Links</span>
            <ul className={styles.linksList}>
              <li><a href="#about" className={styles.footerLink}>About</a></li>
              <li><a href="#skills" className={styles.footerLink}>Skills &amp; Technologies</a></li>
              <li><a href="#projects" className={styles.footerLink}>Projects</a></li>
              <li><a href="#responsibilities" className={styles.footerLink}>Responsibility &amp; Impact</a></li>
              <li><a href="#contact" className={styles.footerLink}>Contact &amp; Inquiries</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className={styles.linksCol}>
            <span className={styles.linksTitle}>Online Presence</span>
            <ul className={styles.linksList}>
              {portfolioData.socialLinks.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                  >
                    {social.platform} &rarr;
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${portfolioData.contactInfo.email}`}
                  className={styles.footerLink}
                >
                  Direct Email &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative wordmark */}
        <div className={styles.wordmark} aria-hidden="true">
          {portfolioData.name}
          <span className={styles.wordmarkDot}>.</span>
        </div>

        {/* Bottom Row */}
        <div className={styles.bottomRow}>
          <div className={styles.copyright}>
            &copy; {currentYear} {portfolioData.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
