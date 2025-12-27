import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ProfileLockProps } from '../../types';

/**
 * ProfileLock Component - Minimalist Edition
 *
 * A refined circular profile with subtle hover interactions.
 * Clean, elegant, and accessible.
 */
export function ProfileLock({ imageSrc, isHovered: controlledHover, onClick, tooltipText }: ProfileLockProps) {
  const [internalHover, setInternalHover] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const isHovered = controlledHover !== undefined ? controlledHover : internalHover;

  const handleClick = () => {
    if (!isUnlocking) {
      setIsUnlocking(true);
      onClick();
    }
  };

  return (
    <div className="relative inline-block">
      {/* Tooltip */}
      <motion.div
        data-testid="profile-lock-tooltip"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10
        }}
        transition={{ duration: 0.2 }}
        className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
      >
        <div
          className="border px-4 py-2 font-mono text-sm whitespace-nowrap theme-transition"
          style={{
            backgroundColor: 'var(--surface)',
            borderColor: 'var(--border)',
            color: 'var(--text)'
          }}
        >
          {tooltipText}
        </div>
      </motion.div>

      {/* Main profile container */}
      <motion.button
        data-testid="profile-lock"
        onClick={handleClick}
        onMouseEnter={() => setInternalHover(true)}
        onMouseLeave={() => setInternalHover(false)}
        whileHover={{ scale: isUnlocking ? 1 : 1.03 }}
        whileTap={{ scale: isUnlocking ? 1 : 0.97 }}
        className="relative w-48 h-48 sm:w-64 sm:h-64 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 touch-manipulation theme-transition"
        style={{
          borderRadius: '50%',
          backgroundColor: 'var(--surface)',
          borderColor: 'var(--border)',
          borderWidth: '2px',
          borderStyle: 'solid'
        }}
        aria-label={tooltipText}
        disabled={isUnlocking}
      >
        {/* Profile image */}
        <div className="absolute inset-4 overflow-hidden" style={{ borderRadius: '50%' }}>
          <motion.img
            data-testid="profile-lock-image"
            src={imageSrc}
            alt="Profile"
            className="w-full h-full object-cover"
            animate={{
              filter: isHovered ? 'grayscale(0%)' : 'grayscale(20%)'
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Subtle border on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ borderRadius: '50%' }}
          animate={{
            borderColor: isHovered ? 'var(--text)' : 'var(--border)',
            borderWidth: '2px',
            borderStyle: 'solid'
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </div>
  );
}

export default ProfileLock;
