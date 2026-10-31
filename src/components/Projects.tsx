'use client';

import React from 'react';
import styles from './Projects.module.css';
import { portfolioData } from '@/data/portfolioData';
import { ExternalLink, CheckCircle } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-main">
            <div className="section-badge">
              <span className="section-index">02</span>
              <span>Featured Case Studies</span>
            </div>
            <h2 className="section-title">
              {portfolioData.projectsHeading}
            </h2>
          </div>
          <p className={`section-subtitle ${styles.subheading}`}>
            {portfolioData.projectsSubheading}
          </p>
        </div>

        {/* Projects List */}
        <div className={styles.projectsList}>
          {portfolioData.projects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.projectCopy}>
                <div className={styles.cardHeader}>
                  <span className={styles.numberLabel}>{project.numberLabel}</span>
                  <span className={styles.headerRule} aria-hidden="true" />
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>

              {/* Exact Client Requirement Block */}
              <div className={styles.clientReqBox}>
                <div className={styles.clientReqHeading}>
                  <CheckCircle size={15} />
                  <span>Client Requirement</span>
                </div>
                <p className={styles.clientReqText}>{project.clientRequirement}</p>
              </div>

              {project.url && (
                <div className={styles.cardFooter}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
