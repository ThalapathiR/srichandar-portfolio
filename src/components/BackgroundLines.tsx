'use client';

import React from 'react';
import styles from './BackgroundLines.module.css';

export const BackgroundLines: React.FC = () => {
  return (
    <div className={styles.gridOverlay} aria-hidden="true">
      <div className={styles.dotPattern} />
      <div className={styles.ambientGlow} />
    </div>
  );
};
