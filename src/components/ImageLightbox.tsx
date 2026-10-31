'use client';

import React, { useEffect } from 'react';
import styles from './ImageLightbox.module.css';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  src: string | null;
  caption?: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ src, caption, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (src) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close image viewer">
          <X size={20} />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={caption || 'Preview image'} className={styles.image} />
        {caption && <p className={styles.caption}>{caption}</p>}
      </div>
    </div>
  );
};
