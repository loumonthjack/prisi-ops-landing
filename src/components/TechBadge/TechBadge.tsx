import { motion } from 'framer-motion';
import type { TechBadgeProps } from '../../types';

/**
 * TechBadge Component - Minimalist Edition
 *
 * Clean, refined badge display for technologies and tools.
 */
export function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <motion.div
      data-testid="tech-badge"
      className="minimal-badge theme-transition"
      whileHover={{
        scale: 1.05,
        borderColor: 'var(--text)',
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {icon && (
        <span
          data-testid="tech-badge-icon"
          className="flex items-center justify-center w-4 h-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          {icon}
        </span>
      )}

      <span data-testid="tech-badge-name">{name}</span>
    </motion.div>
  );
}

export default TechBadge;
