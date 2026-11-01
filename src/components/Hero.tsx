'use client';

import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { portfolioData } from '@/data/portfolioData';
import { ZoomIn, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, BehanceIcon, GithubIcon } from './Icons';
import { ImageLightbox } from './ImageLightbox';
import SplashCursor from './SplashCursor';
import FoldText from './FoldText';

/* Lime palette matched to the site accent */
const SPLASH_COLORS = ['#c5ff00', '#9be800', '#e6ff80'];

export const Hero: React.FC = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [splashEnabled, setSplashEnabled] = useState(false);

  // Only run the fluid effect for mouse users who have not asked for reduced motion
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setSplashEnabled(finePointer.matches && !reducedMotion.matches);
    update();
    finePointer.addEventListener('change', update);
    reducedMotion.addEventListener('change', update);
    return () => {
      finePointer.removeEventListener('change', update);
      reducedMotion.removeEventListener('change', update);
    };
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      {splashEnabled && (
        <SplashCursor
          colors={SPLASH_COLORS}
          rainbow={false}
          size={1}
          force={1}
          swirl={3}
          trail={1}
          clickSplash
          colorSpeed={1}
          intensity={0.6}
          momentum={1}
          shading={1}
          glow={0}
          quality="medium"
          intro
          contained
          zIndex={0}
        />
      )}

      <div className={`container ${styles.heroGrid}`}>
        {/* Left Column: Headline, intro & actions */}
        <div className={styles.leftCol}>
          <h1 className={styles.heading}>
            <span className={styles.greetingText}>Hi,</span>
            <span className={styles.nameLine}>
              I’am <span className={styles.nameHighlight}>{portfolioData.name}</span>
            </span>
            <span className={styles.roleTitle}>
              <FoldText
                text="UX/UI Designer"
                foldStyle="paper"
                splitBy="char"
                hinge="top"
                trigger="mount"
                foldAngle={92}
                duration={0.65}
                stagger={0.045}
                staggerFrom="start"
                ease="power3.out"
                fontSize="inherit"
                fontWeight="inherit"
                color="inherit"
                hoverRefold={true}
              />
            </span>
          </h1>

          <div className={styles.rolePill}>
            <span className={styles.rolePillDot} aria-hidden="true" />
            <span>Digital Marketing | Technical Program Coordinator</span>
          </div>

          <div id="about" className={styles.bioCard}>
            <p className={styles.introParagraph}>
              I’m a <span className={styles.textHighlight}>creative and technology-driven</span> professional passionate about <span className={styles.textHighlight}>designing meaningful digital experiences</span>. I have a background in <span className={styles.textHighlight}>Electrical and Electronics Engineering</span>. Professionally, I have developed skills in <span className={styles.textHighlightAccent}>UX/UI design</span>, <span className={styles.textHighlight}>graphic design</span>, <span className={styles.textHighlight}>digital marketing</span>, and <span className={styles.textHighlight}>digital content creation</span>. I enjoy creating <span className={styles.textHighlight}>user-focused designs</span>, engaging digital content, and practical solutions. I also have experience in <span className={styles.textHighlight}>team leadership</span>, client communication, business networking, and program coordination. My technical background includes <span className={styles.textHighlight}>IoT, Robotics, Arduino, and Embedded Systems</span>. I’m a self-motivated professional who enjoys learning, collaborating, solving problems, and turning ideas into impactful solutions.
            </p>
          </div>

          <div className={styles.actionRow}>
            <a href="#contact" className={`btn btn-primary ${styles.contactBtn}`}>
              Contact
              <ArrowUpRight size={16} />
            </a>
            <a href="#projects" className={`btn btn-secondary ${styles.worksBtn}`}>
              View Works
            </a>
          </div>

          {/* Social Row: LinkedIn, Behance, GitHub */}
          <div className={styles.socialRow}>
            <a
              href="https://linkedin.com/in/srichandar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconLink}
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>

            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconLink}
              aria-label="Behance"
              title="Behance"
            >
              <BehanceIcon size={18} />
            </a>

            <a
              href="https://github.com/srichandar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconLink}
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon size={17} />
            </a>
          </div>
        </div>

        {/* Right Column: Portrait */}
        <div className={styles.rightCol}>
          <div className={styles.portraitStage}>
            <button
              type="button"
              className={styles.portraitFrame}
              onClick={() => setLightboxSrc(portfolioData.profileImage)}
              title="Click to view full portrait"
              aria-label="View full portrait"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={portfolioData.profileImage}
                alt={`${portfolioData.name} portrait`}
                className={styles.profileImg}
              />
              <span className={styles.zoomBadge}>
                <ZoomIn size={13} />
                <span>Zoom</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <ImageLightbox
        src={lightboxSrc}
        caption="Srichandar — UX/UI Designer | Digital Marketing | Technical Program Coordinator"
        onClose={() => setLightboxSrc(null)}
      />
    </section>
  );
};
