'use client';

import React, { useEffect, useCallback } from 'react';
import styles from './ImageLightbox.module.css';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  src: string | null;
  caption?: string;
  images?: string[];
  currentIndex?: number;
  onNavigate?: (newIndex: number) => void;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  src,
  caption,
  images,
  currentIndex = 0,
  onNavigate,
  onClose
}) => {
  const hasMultiple = Boolean(images && images.length > 1);

  const handlePrev = useCallback(() => {
    if (!images || !onNavigate) return;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prevIndex);
  }, [images, currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (!images || !onNavigate) return;
    const nextIndex = (currentIndex + 1) % images.length;
    onNavigate(nextIndex);
  }, [images, currentIndex, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasMultiple) {
        handlePrev();
      } else if (e.key === 'ArrowRight' && hasMultiple) {
        handleNext();
      }
    };

    if (src) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [src, onClose, hasMultiple, handlePrev, handleNext]);

  if (!src) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close image viewer"
        >
          <X size={20} />
        </button>

        {hasMultiple && (
          <>
            <button
              type="button"
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={handlePrev}
              aria-label="Previous image"
              title="Previous image (Left arrow)"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={handleNext}
              aria-label="Next image"
              title="Next image (Right arrow)"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={caption || 'Preview image'} className={styles.image} />

        <div className={styles.footerRow}>
          {caption && <p className={styles.caption}>{caption}</p>}
          {hasMultiple && images && (
            <span className={styles.counter}>
              {currentIndex + 1} / {images.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
