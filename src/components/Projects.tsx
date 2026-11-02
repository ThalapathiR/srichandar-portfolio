'use client';

import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import { portfolioData } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import { ExternalLink, CheckCircle, FileText, Folder, X } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };

    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject]);

  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-main">
            <div className={`section-badge ${styles.sectionBadgeLime}`}>
              <span className={`section-index ${styles.sectionIndexLime}`}>02</span>
              <span className={styles.sectionBadgeTextLime}>Featured Case Studies</span>
            </div>
            <h2 className="section-title">
              <span className={styles.titleHighlightLime}>{portfolioData.projectsHeading}</span>
            </h2>
          </div>
          <p className={`section-subtitle ${styles.subheading}`}>
            {portfolioData.projectsSubheading}
          </p>
        </div>

        {/* Projects List */}
        <div className={styles.projectsList}>
          {portfolioData.projects.map((project) => {
            const hasMultiplePdfs = project.pdfs && project.pdfs.length > 1;
            const singlePdfUrl = project.pdfUrl || (project.pdfs && project.pdfs.length === 1 ? project.pdfs[0].url : undefined);

            return (
              <article key={project.id} className={styles.projectCard}>
                <div className={styles.projectCopy}>
                  <div className={styles.cardHeader}>
                    <span className={styles.numberLabel}>{project.numberLabel}</span>
                    <span className={styles.headerRule} aria-hidden="true" />
                  </div>

                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>

                  {/* Quick-Access PDF Chips */}
                  {project.pdfs && project.pdfs.length > 0 && (
                    <div className={styles.pdfQuickList}>
                      <span className={styles.pdfQuickLabel}>
                        <FileText size={12} />
                        <span>Design Deliverables (PDF):</span>
                      </span>
                      <div className={styles.pdfChips}>
                        {project.pdfs.slice(0, 4).map((pdf, idx) => (
                          <a
                            key={idx}
                            href={pdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.pdfChip}
                            title={`Open ${pdf.title} (PDF) in a new tab`}
                          >
                            <span>{pdf.title}</span>
                            <ExternalLink size={11} />
                          </a>
                        ))}
                        {project.pdfs.length > 4 && (
                          <button
                            type="button"
                            onClick={() => setActiveModalProject(project)}
                            className={`${styles.pdfChip} ${styles.pdfChipMore}`}
                            title={`View all ${project.pdfs.length} PDFs`}
                          >
                            <span>+{project.pdfs.length - 4} more</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Exact Client Requirement Block */}
                <div className={styles.clientReqBox}>
                  <div className={styles.clientReqHeading}>
                    <CheckCircle size={15} />
                    <span>Client Requirement</span>
                  </div>
                  <p className={styles.clientReqText}>{project.clientRequirement}</p>
                </div>

                {/* Action Buttons */}
                <div className={styles.cardFooter}>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {/* Single PDF Direct Link (e.g. Vending Machine App) */}
                  {!hasMultiplePdfs && singlePdfUrl && (
                    <a
                      href={singlePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.pdfActionBtn}
                      title={`Open ${project.title} PDF Presentation`}
                    >
                      <FileText size={14} />
                      <span>Open Design PDF</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {/* Multiple PDFs Selector Modal Button */}
                  {hasMultiplePdfs && (
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className={styles.pdfActionBtn}
                      title={`View all ${project.pdfs!.length} design sheets & deliverables for ${project.title}`}
                    >
                      <Folder size={14} />
                      <span>View Design PDFs ({project.pdfs!.length} Sheets)</span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* PDF Deliverables Modal */}
      {activeModalProject && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="pdf-modal-title"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleGroup}>
                <span className={styles.modalBadge}>Design Deliverables &amp; Sheets</span>
                <h3 id="pdf-modal-title" className={styles.modalTitle}>
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setActiveModalProject(null)}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalSubtext}>
                Click any sheet below to open and review the full presentation PDF in a new tab:
              </p>
              {activeModalProject.pdfs?.map((pdf, idx) => (
                <a
                  key={idx}
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pdfItem}
                  title={`Open ${pdf.title} in new tab`}
                >
                  <div className={styles.pdfItemInfo}>
                    <FileText size={18} className={styles.pdfIcon} />
                    <span className={styles.pdfItemTitle}>{pdf.title}</span>
                  </div>
                  <span className={styles.pdfOpenBtn}>
                    <span>Open PDF</span>
                    <ExternalLink size={12} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
