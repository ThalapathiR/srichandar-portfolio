'use client';

import React, { useState } from 'react';
import styles from './Responsibilities.module.css';
import { portfolioData } from '@/data/portfolioData';
import { ZoomIn, Award } from 'lucide-react';
import { ImageLightbox } from './ImageLightbox';

interface ImpactMetric {
  label: string;
  value: string;
}

interface ResponsibilityMeta {
  scopePill: string;
  metrics: ImpactMetric[];
}

const RESPONSIBILITY_METADATA: Record<string, ResponsibilityMeta> = {
  'design-leadership': {
    scopePill: '5-Member Design Team',
    metrics: [
      { label: 'Role', value: 'Design Lead' },
      { label: 'Scope', value: 'Task Allocation & Workflow Planning' },
      { label: 'Execution', value: 'Output Reviews & Client Coordination' },
      { label: 'Outcome', value: 'High-Quality & Timely Project Delivery' }
    ]
  },
  'corporate-representation': {
    scopePill: 'Weekly CNI Business Meetings',
    metrics: [
      { label: 'Company', value: 'ProtoWiz Private Limited' },
      { label: 'Forum', value: 'Weekly CNI Business Meetings' },
      { label: 'Activities', value: 'Client Engagement & Design Presentations' },
      { label: 'Impact', value: 'Professional Networking & Business Growth' }
    ]
  },
  'event-brand-representation': {
    scopePill: 'Madurai & Coimbatore Expos',
    metrics: [
      { label: 'Expos', value: 'Madurai (2024), Coimbatore (2025), Dindigul (2026)' },
      { label: 'Leadership', value: 'Promotional Team & Stall Coordination' },
      { label: 'Engagement', value: 'Visitor Demos & Product Explanations' },
      { label: 'Impact', value: 'Elevated Startup & Technology Brand Presence' }
    ]
  },
  'skill-based-innovative-development': {
    scopePill: 'EDII Tamil Nadu • 2 Programs',
    metrics: [
      { label: 'Format', value: 'Two 3-Day Intensive SIDP Programs' },
      { label: 'Partner', value: 'EDII Tamil Nadu' },
      { label: 'Curriculum', value: 'Technology, Electronics & Entrepreneurship' },
      { label: 'Beneficiaries', value: 'Graduates & Unemployed Youth' }
    ]
  },
  'atl-innovation-training': {
    scopePill: '30 Schools • 30h Hands-on',
    metrics: [
      { label: 'Role', value: 'Technical Trainer (EDII Tamil Nadu)' },
      { label: 'Hands-on', value: '30 Hours Practical Training' },
      { label: 'Domains', value: 'Embedded Systems, IoT & Robotics' },
      { label: 'Coverage', value: '30 Schools in Coimbatore, Erode, Tiruppur' }
    ]
  },
  'atl-educator-training': {
    scopePill: 'District-Wide Teacher Training',
    metrics: [
      { label: 'Audience', value: 'ATL School Teachers & Educators' },
      { label: 'Districts', value: 'Coimbatore, Erode, Tiruppur' },
      { label: 'Focus', value: 'Technology Integration & ATL Lab Utilization' },
      { label: 'Impact', value: 'Autonomous Teacher-Led Student Innovation' }
    ]
  },
  'atl-lab-survey': {
    scopePill: '8 Districts Survey Program',
    metrics: [
      { label: 'Coverage', value: '8 Districts across Tamil Nadu' },
      { label: 'Role', value: 'Survey Coordinator & Technical Trainer' },
      { label: 'Fieldwork', value: 'Trainer Scheduling & 3 Direct School Surveys' },
      { label: 'Objective', value: 'Lab Readiness & Infrastructure Assessment' }
    ]
  },
  'school-coordination': {
    scopePill: '30 School Headmasters',
    metrics: [
      { label: 'Stakeholders', value: 'Headmasters & School Authorities' },
      { label: 'Scale', value: '30 Assigned Schools' },
      { label: 'Districts', value: 'Coimbatore, Erode & Tiruppur' },
      { label: 'Outcome', value: '100% Program Schedule Confirmation' }
    ]
  },
  'rural-innovation': {
    scopePill: 'Rural Youth Innovation Program',
    metrics: [
      { label: 'Venue', value: 'Jain Tuition Centre' },
      { label: 'Duration', value: '30-Hour Hands-on Technical Program' },
      { label: 'Focus', value: 'Practical Electronics & Tech Exploration' },
      { label: 'Mission', value: 'Nurturing Innovation Mindsets in Rural Youth' }
    ]
  },
  'event-hosting': {
    scopePill: '21,000+ Students • 60 Schools',
    metrics: [
      { label: 'Event', value: 'POGO Tamil Thiruvizha 2026' },
      { label: 'Role', value: 'Master of Ceremonies & Stage Host' },
      { label: 'Scale', value: '21,000+ Students across 60 Schools' },
      { label: 'Duration', value: 'Month-long Interactive Experience' }
    ]
  }
};

export const Responsibilities: React.FC = () => {
  const [lightboxData, setLightboxData] = useState<{
    images: string[];
    currentIndex: number;
    caption: string;
  } | null>(null);

  const handleOpenLightbox = (images: string[], index: number, caption: string) => {
    setLightboxData({
      images,
      currentIndex: index,
      caption
    });
  };

  const handleNavigateLightbox = (newIndex: number) => {
    if (!lightboxData) return;
    setLightboxData({
      ...lightboxData,
      currentIndex: newIndex
    });
  };

  return (
    <section id="responsibilities" className={`section ${styles.responsibilitiesSection}`}>
      <div className="container">
        {/* Section Header with Warm Amber/Gold Differentiated Color */}
        <div className="section-header">
          <div className="section-header-main">
            <div className={`section-badge ${styles.sectionBadgeAmber}`}>
              <span className={`section-index ${styles.sectionIndexAmber}`}>03</span>
              <span className={styles.sectionBadgeTextAmber}>Fieldwork &amp; Leadership</span>
            </div>
            <h2 className={`section-title ${styles.sectionTitleAmber}`}>
              professional responsibility <br className={styles.desktopBr} />
              and <span className={styles.titleHighlightAmber}>impact</span>
            </h2>
          </div>
        </div>

        {/* Responsibilities Editorial Cards (Solution 1: Sandwich Layout) */}
        <div className={styles.itemsList}>
          {portfolioData.responsibilities.map((item, index) => {
            const indexStr = (index + 1).toString().padStart(2, '0');
            const hasImages = item.images && item.images.length > 0;
            const meta = RESPONSIBILITY_METADATA[item.id];

            return (
              <div
                key={item.id}
                id={`resp-${item.id}`}
                className={`${styles.itemCard} ${!hasImages ? styles.milestoneCard : ''}`}
              >
                {/* 1. TOP: Title & Scope Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.headerMeta}>
                    <div className={styles.badgeRow}>
                      <span className={styles.indexBadge}>{indexStr}</span>
                      <span className={styles.badgeDivider} aria-hidden="true">•</span>
                      <span className={styles.categoryLabel}>Fieldwork &amp; Leadership</span>
                    </div>

                    {meta?.scopePill && (
                      <span className={styles.scopePill}>{meta.scopePill}</span>
                    )}
                  </div>

                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>

                {/* 2. MIDDLE: Visual Evidence Showcase (Directly under the Title!) */}
                {hasImages && (
                  <div className={styles.visualShowcase}>
                    <div className={styles.visualHeader}>
                      <span className={styles.colLabel}>// VISUAL EVIDENCE</span>
                      <span className={styles.photoCountBadge}>
                        {item.images.length} {item.images.length === 1 ? 'PHOTO' : 'PHOTOS'} • CLICK TO ENLARGE
                      </span>
                    </div>

                    {/* Single Image Showcase */}
                    {item.images.length === 1 && (
                      <div className={styles.gallery1}>
                        <button
                          type="button"
                          className={styles.imageCard}
                          onClick={() =>
                            handleOpenLightbox(
                              item.images,
                              0,
                              `${item.title} (Fieldwork Photo)`
                            )
                          }
                          title="Click to view full photo"
                          aria-label={`View ${item.title} photo`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.images[0]}
                            alt={`${item.title} photo`}
                            className={styles.showcaseImg}
                            loading="lazy"
                          />
                          <div className={styles.imageOverlay}>
                            <div className={styles.zoomPill}>
                              <ZoomIn size={15} />
                              <span>View High-Res Photo</span>
                            </div>
                            <span className={styles.photoTag}>Full Showcase</span>
                          </div>
                        </button>
                      </div>
                    )}

                    {/* Two Images Side-by-Side */}
                    {item.images.length === 2 && (
                      <div className={styles.gallery2}>
                        {item.images.map((imgSrc, imgIdx) => (
                          <button
                            type="button"
                            key={imgIdx}
                            className={styles.imageCard}
                            onClick={() =>
                              handleOpenLightbox(
                                item.images,
                                imgIdx,
                                `${item.title} (Photo ${imgIdx + 1} of 2)`
                              )
                            }
                            title="Click to view full photo"
                            aria-label={`View ${item.title} photo ${imgIdx + 1}`}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={imgSrc}
                              alt={`${item.title} photo ${imgIdx + 1}`}
                              className={styles.showcaseImg}
                              loading="lazy"
                            />
                            <div className={styles.imageOverlay}>
                              <div className={styles.zoomPill}>
                                <ZoomIn size={15} />
                                <span>Enlarge</span>
                              </div>
                              <span className={styles.photoTag}>
                                {imgIdx + 1} / 2
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Three Images: Magazine Asymmetric Layout */}
                    {item.images.length === 3 && (
                      <div className={styles.gallery3}>
                        {/* Main Featured Photo */}
                        <button
                          type="button"
                          className={`${styles.imageCard} ${styles.gallery3Hero}`}
                          onClick={() =>
                            handleOpenLightbox(
                              item.images,
                              0,
                              `${item.title} (Photo 1 of 3)`
                            )
                          }
                          title="Click to view full photo"
                          aria-label={`View ${item.title} photo 1`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.images[0]}
                            alt={`${item.title} photo 1`}
                            className={styles.showcaseImg}
                            loading="lazy"
                          />
                          <div className={styles.imageOverlay}>
                            <div className={styles.zoomPill}>
                              <ZoomIn size={15} />
                              <span>Feature Shot • Enlarge</span>
                            </div>
                            <span className={styles.photoTag}>1 / 3</span>
                          </div>
                        </button>

                        {/* Stacked Secondary Photos */}
                        <div className={styles.gallery3Secondary}>
                          {item.images.slice(1).map((imgSrc, subIdx) => {
                            const actualIdx = subIdx + 1;
                            return (
                              <button
                                type="button"
                                key={actualIdx}
                                className={styles.imageCard}
                                onClick={() =>
                                  handleOpenLightbox(
                                    item.images,
                                    actualIdx,
                                    `${item.title} (Photo ${actualIdx + 1} of 3)`
                                  )
                                }
                                title="Click to view full photo"
                                aria-label={`View ${item.title} photo ${actualIdx + 1}`}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={imgSrc}
                                  alt={`${item.title} photo ${actualIdx + 1}`}
                                  className={styles.showcaseImg}
                                  loading="lazy"
                                />
                                <div className={styles.imageOverlay}>
                                  <div className={styles.zoomPill}>
                                    <ZoomIn size={14} />
                                    <span>Enlarge</span>
                                  </div>
                                  <span className={styles.photoTag}>
                                    {actualIdx + 1} / 3
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Four Images: Large Grand 2x2 Grid */}
                    {item.images.length >= 4 && (
                      <div className={styles.gallery4}>
                        {item.images.map((imgSrc, imgIdx) => (
                          <button
                            type="button"
                            key={imgIdx}
                            className={styles.imageCard}
                            onClick={() =>
                              handleOpenLightbox(
                                item.images,
                                imgIdx,
                                `${item.title} (Photo ${imgIdx + 1} of ${item.images.length})`
                              )
                            }
                            title="Click to view full photo"
                            aria-label={`View ${item.title} photo ${imgIdx + 1}`}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={imgSrc}
                              alt={`${item.title} photo ${imgIdx + 1}`}
                              className={styles.showcaseImg}
                              loading="lazy"
                            />
                            <div className={styles.imageOverlay}>
                              <div className={styles.zoomPill}>
                                <ZoomIn size={15} />
                                <span>Enlarge</span>
                              </div>
                              <span className={styles.photoTag}>
                                {imgIdx + 1} / {item.images.length}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Strategic Milestone Banner for Items with No Photos */}
                {!hasImages && (
                  <div className={styles.strategicInitiativeBanner}>
                    <div className={styles.bannerHeader}>
                      <div className={styles.bannerBadge}>
                        <Award size={16} className={styles.bannerIcon} />
                        <span>STATE-LEVEL ENTREPRENEURSHIP INITIATIVE</span>
                      </div>
                    </div>
                    <p className={styles.bannerNote}>
                      Key government-partnered skill development intensive delivered under the Entrepreneurship Development and Innovation Institute (EDII) Tamil Nadu to bridge technical literacy and career readiness.
                    </p>
                  </div>
                )}

                {/* 3. BOTTOM: Responsibility Narrative & Key Impact (Anchors and finishes the card!) */}
                <div className={styles.contentSplit}>
                  <div className={styles.narrativeCol}>
                    <span className={styles.colLabel}>// RESPONSIBILITY &amp; SCOPE</span>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>

                  {meta?.metrics && (
                    <div className={styles.impactCol}>
                      <div className={styles.impactCard}>
                        <div className={styles.impactCardHeader}>
                          <span className={styles.impactPulseDot} />
                          <span className={styles.colLabel}>// KEY IMPACT &amp; SCOPE</span>
                        </div>
                        <div className={styles.metricsList}>
                          {meta.metrics.map((m, mIdx) => (
                            <div key={mIdx} className={styles.metricRow}>
                              <span className={styles.metricLabel}>{m.label}:</span>
                              <span className={styles.metricValue}>{m.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ImageLightbox
        src={
          lightboxData && lightboxData.images.length > 0
            ? lightboxData.images[lightboxData.currentIndex]
            : null
        }
        caption={lightboxData?.caption}
        images={lightboxData?.images}
        currentIndex={lightboxData?.currentIndex}
        onNavigate={handleNavigateLightbox}
        onClose={() => setLightboxData(null)}
      />
    </section>
  );
};
