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
  Calendar,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.contactInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    if (!portfolioData.contactInfo.phone) return;
    try {
      await navigator.clipboard.writeText(portfolioData.contactInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-main">
            <div className="section-badge">
              <span className="section-index">04</span>
              <span>Direct Channel</span>
            </div>
            <h2 className="section-title">
              Get in <span className="gradient-text">Touch</span>
            </h2>
          </div>
        </div>

        <div className={styles.contactWrapper}>
          <div className={styles.contactCard}>
            <div className={styles.contactCardInner}>
              {/* Primary Action / Direct Email & Phone */}
              <div className={styles.primaryAction}>
                <span className={styles.actionLabel}>DIRECT INQUIRY</span>
                <a
                  href={`mailto:${portfolioData.contactInfo.email}`}
                  className={styles.emailDisplay}
                >
                  {portfolioData.contactInfo.email}
                  <ArrowUpRight size={24} className={styles.emailArrow} />
                </a>

                <div className={styles.emailActions}>
                  <button
                    type="button"
                    className={styles.copyBtn}
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={16} />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${portfolioData.contactInfo.email}`}
                    className={styles.mailToBtn}
                  >
                    <Mail size={16} />
                    <span>Send Email</span>
                  </a>

                  {portfolioData.contactInfo.phone && (
                    <a
                      href={`tel:${portfolioData.contactInfo.phone}`}
                      className={styles.phoneActionBtn}
                      title="Call directly"
                    >
                      <Phone size={16} />
                      <span>{portfolioData.contactInfo.phone}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Meta Row: Phone, Location & Availability */}
              <div className={styles.metaRow}>
                {portfolioData.contactInfo.phone && (
                  <div className={styles.metaItem}>
                    <div className={styles.metaIcon}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className={styles.metaLabel}>PHONE / MOBILE</span>
                      <a 
                        href={`tel:${portfolioData.contactInfo.phone}`}
                        className={styles.metaLink}
                      >
                        {portfolioData.contactInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                <div className={styles.metaDivider} />

                <div className={styles.metaItem}>
                  <div className={styles.metaIcon}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className={styles.metaLabel}>LOCATION</span>
                    <span className={styles.metaValue}>{portfolioData.contactInfo.location}</span>
                  </div>
                </div>

                <div className={styles.metaDivider} />

                <div className={styles.metaItem}>
                  <div className={styles.metaIcon}>
                    <Calendar size={18} />
                  </div>
                  <div>
                    <span className={styles.metaLabel}>AVAILABILITY</span>
                    <span className={styles.metaValue}>{portfolioData.contactInfo.availability}</span>
                  </div>
                </div>
              </div>

              {/* Verified Social Channels */}
              <div className={styles.socialChannels}>
                <a
                  href={portfolioData.socialLinks.find(s => s.platform === 'LinkedIn')?.url || 'https://linkedin.com/in/srichandar03'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLinkCard}
                >
                  <div className={styles.socialIconBox}>
                    <LinkedinIcon size={20} />
                  </div>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialName}>LinkedIn</span>
                    <span className={styles.socialHandle}>srichandar03</span>
                  </div>
                  <ArrowUpRight size={16} className={styles.socialArrow} />
                </a>

                <a
                  href={portfolioData.socialLinks.find(s => s.platform === 'Instagram')?.url || 'https://www.instagram.com/chocoboy.srii?rpxt=MTNsdnQ5MW1hd3JrbQ=='}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLinkCard}
                >
                  <div className={styles.socialIconBox}>
                    <InstagramIcon size={20} />
                  </div>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialName}>Instagram</span>
                    <span className={styles.socialHandle}>@chocoboy.srii</span>
                  </div>
                  <ArrowUpRight size={16} className={styles.socialArrow} />
                </a>

                <a
                  href={portfolioData.socialLinks.find(s => s.platform === 'GitHub')?.url || 'https://github.com/srichandar'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLinkCard}
                >
                  <div className={styles.socialIconBox}>
                    <GithubIcon size={20} />
                  </div>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialName}>GitHub</span>
                    <span className={styles.socialHandle}>Code &amp; projects</span>
                  </div>
                  <ArrowUpRight size={16} className={styles.socialArrow} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
