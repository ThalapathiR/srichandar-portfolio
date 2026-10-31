'use client';

import React, { useState } from 'react';
import styles from './Responsibilities.module.css';
import { portfolioData } from '@/data/portfolioData';
import { ZoomIn } from 'lucide-react';
import { ImageLightbox } from './ImageLightbox';

export const Responsibilities: React.FC = () => {
  const [lightboxData, setLightboxData] = useState<{ src: string; caption: string } | null>(null);

  const getGridClass = (count: number) => {
    if (count === 1) return styles.grid1;
    if (count === 2) return styles.grid2;
    if (count === 3) return styles.grid3;
    return styles.grid4;
  };

  return (
    <section id="responsibilities" className={`section ${styles.responsibilitiesSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-main">
            <div className="section-badge">
              <span className="section-index">03</span>
              <span>Fieldwork &amp; Leadership</span>
            </div>
            <h2 className="section-title">
              {portfolioData.responsibilityHeading}
            </h2>
          </div>
          <p className="section-subtitle">
            Demonstrated impact across design leadership, corporate networking, technical training, school coordination, and community innovation programs.
          </p>
        </div>

        {/* Responsibilities List with Alternating Editorial Layout */}
        <div className={styles.itemsList}>
          {portfolioData.responsibilities.map((item, index) => {
            const indexStr = (index + 1).toString().padStart(2, '0');
            const hasImages = item.images && item.images.length > 0;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={item.id}
                className={`${styles.itemCard} ${
                  hasImages
                    ? isReversed
                      ? styles.cardReversed
                      : styles.cardNormal
                    : styles.noImagesCard
                }`}
              >
                <div className={styles.itemBody}>
                  <div className={styles.cardHeader}>
                    <div className={styles.badgeRow}>
                      <span className={styles.indexBadge}>{indexStr}</span>
                      <span className={styles.badgeDivider} aria-hidden="true">•</span>
                      <span className={styles.impactLabel}>Fieldwork &amp; Leadership</span>
                    </div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                  </div>

                  <p className={styles.itemDescription}>{item.description}</p>
                </div>

                {/* Images Gallery */}
                {hasImages && (
                  <div className={`${styles.galleryGrid} ${getGridClass(item.images.length)}`}>
                    {item.images.map((imgSrc, imgIdx) => (
                      <button
                        type="button"
                        key={imgIdx}
                        className={styles.imageThumbWrapper}
                        onClick={() =>
                          setLightboxData({
                            src: imgSrc,
                            caption: `${item.title} (Photo ${imgIdx + 1})`
                          })
                        }
                        title="Click to zoom in"
                        aria-label={`View ${item.title} photo ${imgIdx + 1}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={imgSrc}
                          alt={`${item.title} photo ${imgIdx + 1}`}
                          className={styles.thumbImg}
                          loading="lazy"
                        />
                        <span className={styles.zoomOverlay}>
                          <ZoomIn size={16} />
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <ImageLightbox
        src={lightboxData?.src || null}
        caption={lightboxData?.caption}
        onClose={() => setLightboxData(null)}
      />
    </section>
  );
};
