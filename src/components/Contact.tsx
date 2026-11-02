'use client';

import React, { useState } from 'react';
import styles from './Contact.module.css';
import { portfolioData } from '@/data/portfolioData';
import { 
  Mail, 
  Phone,
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight
} from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.contactInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <div className={styles.sectionBadge}>
            <span className={styles.sectionIndex}>04</span>
            <span className={styles.sectionBadgeText}>Direct Channel</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Get in <span className={styles.titleHighlight}>Touch.</span>
          </h2>
        </div>

        {/* Unified Editorial Contact Showcase */}
        <div className={styles.contactContainer}>
          {/* 1. Hero Email Action Banner */}
          <div className={styles.emailBanner}>
            <div className={styles.emailLeft}>
              <span className={styles.bannerEyebrow}>DIRECT EMAIL</span>
              <a
                href={`mailto:${portfolioData.contactInfo.email}`}
                className={styles.emailLink}
              >
                {portfolioData.contactInfo.email}
                <ArrowUpRight size={22} className={styles.emailArrow} />
              </a>
            </div>

            <div className={styles.emailActions}>
              <a
                href={`mailto:${portfolioData.contactInfo.email}`}
                className={styles.primaryBtn}
              >
                <Mail size={16} />
                <span>Send Email</span>
              </a>

              <button
                type="button"
                className={styles.secondaryBtn}
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check size={16} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 2. Direct Channels Grid */}
          <div className={styles.channelsGrid}>
            {/* Phone Card */}
            {portfolioData.contactInfo.phone && (
              <a
                href={`tel:${portfolioData.contactInfo.phone}`}
                className={styles.channelCard}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconBox}>
                    <Phone size={18} />
                  </div>
                  <ArrowUpRight size={16} className={styles.cardArrow} />
                </div>
                <span className={styles.cardLabel}>PHONE / MOBILE</span>
                <span className={styles.cardValue}>{portfolioData.contactInfo.phone}</span>
                <span className={styles.cardSub}>Call or WhatsApp</span>
              </a>
            )}

            {/* Location & Status Card */}
            <div className={styles.channelCardStatic}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  <MapPin size={18} />
                </div>
              </div>
              <span className={styles.cardLabel}>LOCATION</span>
              <span className={styles.cardValue}>{portfolioData.contactInfo.location}</span>
              <span className={styles.cardSub}>{portfolioData.contactInfo.availability}</span>
            </div>

            {/* Verified Social Presence Card */}
            <div className={styles.socialCardWide}>
              <span className={styles.cardLabel}>ONLINE PROFILES</span>
              <div className={styles.socialButtonsRow}>
                <a
                  href={portfolioData.socialLinks.find(s => s.platform === 'LinkedIn')?.url || 'https://linkedin.com/in/srichandar03'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialPill}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={portfolioData.socialLinks.find(s => s.platform === 'Instagram')?.url || 'https://www.instagram.com/chocoboy.srii?rpxt=MTNsdnQ5MW1hd3JrbQ=='}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialPill}
                >
                  <InstagramIcon size={16} />
                  <span>Instagram</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
