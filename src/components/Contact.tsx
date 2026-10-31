'use client';

import React, { useState } from 'react';
import styles from './Contact.module.css';
import { portfolioData } from '@/data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI Consulting & Development',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message or project requirements.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API network submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'AI Consulting & Development',
        message: ''
      });
      setErrors({});
    }, 1200);
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
          <p className="section-subtitle">
            Whether you want to discuss a new AI project, explore engineering collaborations, or discuss full-time roles, I am just a message away.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Info & Social Cards */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.infoCardHeader}>
                <h3 className={styles.infoTitle}>Contact Details</h3>
                <p className={styles.infoSubtitle}>
                  Prefer direct outreach? Reach me across any of these verified channels:
                </p>
              </div>

              <div className={styles.infoList}>
                {/* Email Item */}
                <div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIconBox}>
                      <Mail size={18} />
                    </div>
                    <div className={styles.infoItemContent}>
                      <span className={styles.infoItemLabel}>Direct Email</span>
                      <a 
                        href={`mailto:${portfolioData.contactInfo.email}`} 
                        className={styles.infoItemValue}
                      >
                        {portfolioData.contactInfo.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      className={styles.copyEmailBtn}
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      title="Copy email"
                    >
                      {copied ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                    </button>
                  </div>
                  {copied && (
                    <div className={styles.copySuccessNotice}>
                      Email copied to clipboard!
                    </div>
                  )}
                </div>

                {/* Location Item */}
                <div className={styles.infoItem}>
                  <div className={styles.infoIconBox}>
                    <MapPin size={18} />
                  </div>
                  <div className={styles.infoItemContent}>
                    <span className={styles.infoItemLabel}>Current Location</span>
                    <span className={styles.infoItemValue}>{portfolioData.contactInfo.location}</span>
                  </div>
                </div>

                {/* Availability Item */}
                <div className={styles.infoItem}>
                  <div className={styles.infoIconBox}>
                    <Calendar size={18} />
                  </div>
                  <div className={styles.infoItemContent}>
                    <span className={styles.infoItemLabel}>Availability</span>
                    <span className={styles.infoItemValue}>{portfolioData.contactInfo.availability}</span>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className={styles.responseTimeBox}>
                <Clock size={16} />
                <span>Response time: Typically within 24 business hours.</span>
              </div>
            </div>

            {/* Social Grid */}
            <div className={styles.socialCardsGrid}>
              <a
                href={portfolioData.socialLinks.find(s => s.platform === 'LinkedIn')?.url || 'https://linkedin.com'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <div className={styles.socialCardIcon}>
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <div className={styles.socialCardTitle}>LinkedIn</div>
                  <div className={styles.socialCardSub}>Connect professionally</div>
                </div>
              </a>

              <a
                href={portfolioData.socialLinks.find(s => s.platform === 'GitHub')?.url || 'https://github.com'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <div className={styles.socialCardIcon}>
                  <GithubIcon size={20} />
                </div>
                <div>
                  <div className={styles.socialCardTitle}>GitHub</div>
                  <div className={styles.socialCardSub}>Explore open-source</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={styles.formCol}>
            {submitted ? (
              <div className={styles.successBanner}>
                <div className={styles.successIcon}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 className={styles.successHeading}>Message Dispatched!</h3>
                <p className={styles.successText}>
                  Thank you for reaching out. Your inquiry has been received, and I will get back to you shortly.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className={styles.formTitle}>Send a Message</h3>
                <p className={styles.formSubtitle}>
                  Fill out the form below and I will respond to your inquiry directly.
                </p>

                <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className={styles.input}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        className={styles.input}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>
                      Topic / Subject
                    </label>
                    <select
                      id="subject"
                      className={styles.select}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="AI Consulting & Development">AI Consulting &amp; Development</option>
                      <option value="Full-Stack Web Engineering">Full-Stack Web Engineering</option>
                      <option value="Hiring / Full-time Opportunity">Hiring / Full-time Opportunity</option>
                      <option value="Open Source Collaboration">Open Source Collaboration</option>
                      <option value="General Question">General Inquiry</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Message / Project Scope *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project, timeline, and architectural objectives..."
                      className={styles.textarea}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
