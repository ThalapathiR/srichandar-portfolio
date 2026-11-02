'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Skills.module.css';
import { portfolioData } from '@/data/portfolioData';
import { SkillIcon, getSkillIconKind, getSkillIconColor } from './SkillIcon';

/* Optical sizes per icon kind so every mark reads at the same visual weight */
const ICON_SIZE = {
  glyph: 20,   // Phosphor glyphs carry built-in padding
  brand: 18,   // Simple Icons marks fill their whole artboard
  app: 40,     // Adobe app icons include their own tile
} as const;

/* Custom PNG icons: drawn inside a light chip, or edge to edge when the art has its own tile */
const IMAGE_SIZE = 30;
const IMAGE_FILL_SIZE = 40;

const chipClass = {
  glyph: styles.chipGlyph,
  brand: styles.chipBrand,
  app: styles.chipApp,
} as const;

const pad = (n: number) => n.toString().padStart(2, '0');

/* Staggered reveal timing (ms): header first, then tiles in reading order */
const REVEAL_TILE_START = 120;
const REVEAL_TILE_STEP = 35;

/**
 * Reveals each category panel once as it scrolls into view.
 * Panels already on screen (or with reduced motion / no IntersectionObserver)
 * are never hidden, so content can't flash or go missing.
 */
function useStaggeredReveal() {
  const panelRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const panels = panelRefs.current.filter((el): el is HTMLElement => el !== null);
    if (panels.length === 0) return;
    if (typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const panel = entry.target as HTMLElement;
          panel.dataset.reveal = 'done';
          observer.unobserve(panel);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    panels.forEach((panel) => {
      const rect = panel.getBoundingClientRect();
      const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
      if (onScreen) return;
      panel.dataset.reveal = 'pending';
      observer.observe(panel);
    });

    return () => {
      observer.disconnect();
      panels.forEach((panel) => {
        delete panel.dataset.reveal;
      });
    };
  }, []);

  return panelRefs;
}

export const Skills: React.FC = () => {
  const panelRefs = useStaggeredReveal();

  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${styles.header}`}>
          <div className="section-header-main">
            <div className="section-badge">
              <span className="section-index">01</span>
              <span>Expertise &amp; Capabilities</span>
            </div>
            <h2 className="section-title">
              {portfolioData.skillsHeading}
            </h2>
          </div>
        </div>

        {/* Category panels: Design & Digital | Technology & Leadership */}
        <div className={styles.groupsGrid}>
          {portfolioData.skillGroups.map((group, groupIndex) => {
            const isDesign = group.categoryTitle.includes('Design');

            return (
              <article
                key={group.categoryTitle}
                ref={(el) => {
                  panelRefs.current[groupIndex] = el;
                }}
                className={`${styles.groupCard} ${isDesign ? styles.groupDesign : styles.groupTech}`}
              >
                <header
                  className={`${styles.groupHeader} ${styles.revealItem}`}
                  style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
                >
                  <div className={styles.groupHeading}>
                    <span className={styles.groupIndex}>{pad(groupIndex + 1)}</span>
                    <h3 className={styles.groupTitle}>{group.categoryTitle}</h3>
                  </div>
                  <span className={styles.groupBadgeIcon} aria-hidden="true">
                    <SkillIcon name={isDesign ? 'swatches' : 'cpu'} size={24} />
                  </span>
                </header>

                <ul className={styles.skillList}>
                  {group.skills.map((skill, skillIndex) => {
                    const kind = getSkillIconKind(skill.iconName) ?? 'glyph';
                    const brandColor = getSkillIconColor(skill.iconName);
                    const chipStyle = brandColor && !skill.iconImage
                      ? ({ '--brand': brandColor } as React.CSSProperties)
                      : undefined;
                    const chipKindClass = skill.iconImage
                      ? (skill.iconImageFill ? styles.chipImageFill : styles.chipImage)
                      : chipClass[kind];
                    const imageSize = skill.iconImageFill ? IMAGE_FILL_SIZE : IMAGE_SIZE;

                    return (
                      <li
                        key={skill.name}
                        className={`${styles.skillItem} ${styles.revealItem}`}
                        style={{
                          '--reveal-delay': `${REVEAL_TILE_START + skillIndex * REVEAL_TILE_STEP}ms`,
                        } as React.CSSProperties}
                      >
                        <div className={styles.skillTop}>
                          <span
                            className={`${styles.skillIconBox} ${chipKindClass}`}
                            style={chipStyle}
                            aria-hidden="true"
                          >
                            {skill.iconImage ? (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img
                                src={skill.iconImage}
                                alt=""
                                width={imageSize}
                                height={imageSize}
                                loading="lazy"
                                decoding="async"
                                className={styles.skillImage}
                              />
                            ) : (
                              <SkillIcon name={skill.iconName} size={ICON_SIZE[kind]} />
                            )}
                          </span>
                          <span className={styles.skillIndex} aria-hidden="true">
                            {pad(skillIndex + 1)}
                          </span>
                        </div>
                        <span className={styles.skillName}>{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
