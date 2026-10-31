import React from 'react';
import { skillIcons, type SkillIconKind } from '@/data/skillIcons';

interface SkillIconProps {
  name: string;
  size?: number;
  className?: string;
}

/** Renders an icon from the local skill icon registry as inline SVG. */
export const SkillIcon: React.FC<SkillIconProps> = ({ name, size = 20, className }) => {
  const icon = skillIcons[name];
  if (!icon) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill={icon.kind === 'app' ? undefined : 'currentColor'}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {icon.shapes.map((shape, i) => (
        <path key={i} d={shape.d} fill={shape.fill} opacity={shape.opacity} />
      ))}
    </svg>
  );
};

export const getSkillIconKind = (name: string): SkillIconKind | undefined =>
  skillIcons[name]?.kind;

export const getSkillIconColor = (name: string): string | undefined =>
  skillIcons[name]?.color;
