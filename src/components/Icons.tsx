import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const BehanceIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.109 0-5.5-2.261-5.5-5.5 0-3.21 2.34-5.5 5.448-5.5 3.059 0 4.966 2.057 5.048 4.981h-7.994c.059 1.488.98 2.519 2.529 2.519 1.144 0 1.956-.525 2.385-1.5h2.808zm-7.669-4h5.275c-.078-1.282-.821-2.18-2.529-2.18-1.537 0-2.484.896-2.746 2.18zm-11.057 7h-5v-14h5.508c2.477 0 4.492 1.096 4.492 3.659 0 1.543-.889 2.74-2.138 3.297 1.637.585 2.638 1.968 2.638 3.689 0 2.571-2.072 3.355-5.5 3.355zm-2.5-8.5h2.721c1.238 0 2.279-.472 2.279-1.685 0-1.121-.865-1.565-2.062-1.565h-2.938v3.25zm0 6h2.898c1.373 0 2.602-.455 2.602-1.849 0-1.424-1.229-1.901-2.67-1.901h-2.83v3.75z" />
  </svg>
);
