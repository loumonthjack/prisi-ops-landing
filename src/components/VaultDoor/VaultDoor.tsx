import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/**
 * VaultDoor Component - Minimalist Edition
 *
 * Clean, refined landing view with elegant transitions.
 * Features metallic PRISI OPS text logo with click to enter.
 */

interface VaultDoorProps {
  profileImageSrc?: string;
  onUnlock: () => void;
  onEnter: () => void;
  isUnlocked: boolean;
  isReturningVisitor?: boolean;
}

export function VaultDoor({ onUnlock, onEnter, isUnlocked, isReturningVisitor = false }: VaultDoorProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [doorFullyOpen, setDoorFullyOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSkippable, setIsSkippable] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    if (!isUnlocked && !isOpening) {
      onUnlock();
      setIsOpening(true);

      if (prefersReducedMotion) {
        setDoorFullyOpen(true);
      }
    }
  };

  const handleDoorAnimationComplete = () => {
    if (isOpening) {
      setDoorFullyOpen(true);
    }
  };

  const handleEntryAnimationComplete = () => {
    if (doorFullyOpen) {
      // Different durations for new vs returning visitors
      const welcomeDuration = isReturningVisitor ? 500 : 1000;

      // Make skippable after 500ms
      setTimeout(() => {
        setIsSkippable(true);
      }, 500);

      // Auto-enter after duration
      setTimeout(() => {
        onEnter();
      }, welcomeDuration);
    }
  };

  const handleSkip = () => {
    if (isSkippable) {
      onEnter();
    }
  };

  // Keyboard skip functionality
  useEffect(() => {
    if (!doorFullyOpen || !isSkippable) return;

    const handleKeyPress = () => {
      handleSkip();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [doorFullyOpen, isSkippable]);

  const doorAnimationDuration = isMobile ? 0.8 : 1.2;
  const entryAnimationDuration = isMobile ? 0.8 : 1.2;

  return (
    <div
      className="fixed inset-0 overflow-hidden theme-transition"
      style={{ backgroundColor: 'var(--bg)' }}
      data-testid="vault-door-container"
    >
      {/* Main Content Container */}
      <AnimatePresence mode="wait">
        {!doorFullyOpen ? (
          <motion.div
            key="landing-view"
            data-testid="vault-door"
            className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 cursor-pointer select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpening ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : doorAnimationDuration,
              ease: [0.4, 0, 0.2, 1]
            }}
            onAnimationComplete={handleDoorAnimationComplete}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* PRISI OPS Logo - Static Metallic Text */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 md:mb-6 font-display metallic-text tracking-wider"
              style={{
                fontSize: isMobile ? '3rem' : '5rem',
                letterSpacing: '0.15em',
              }}
            >
              PRISI OPS
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 md:mb-6 text-sm md:text-lg tracking-wide text-center px-4 font-semibold"
              style={{
                color: 'var(--text)',
                fontSize: isMobile ? '0.7rem' : '1.5rem',
              }}
            >
              AI-Powered Operations for Dallas-Fort Worth Businesses
            </motion.p>


            <br/>

            {/* Enhanced Click to Enter CTA */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              onClick={handleClick}
              className="px-6 py-3 text-sm tracking-widest uppercase border transition-all theme-transition mt-4"
              style={{
                borderColor: isHovered ? 'var(--text-secondary)' : 'var(--border)',
                color: isHovered ? 'var(--text)' : 'var(--text-muted)',
                backgroundColor: isHovered ? 'rgba(255,255,255,0.03)' : 'transparent',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter Experience →
            </motion.button>

            {/* Subtle pulse animation on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                boxShadow: isHovered
                  ? 'inset 0 0 100px rgba(255,255,255,0.03)'
                  : 'inset 0 0 0px rgba(255,255,255,0)',
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Minimal Border Frame */}
            <motion.div
              className="absolute inset-8 md:inset-16 pointer-events-none border theme-transition"
              style={{ borderColor: 'var(--border)' }}
              animate={{
                borderColor: isHovered ? 'var(--border-hover, var(--border))' : 'var(--border)',
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ) : (
          /* Welcome Screen - Impactful Entry */
          <motion.div
            key="entry-transition"
            data-testid="vault-entry"
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : entryAnimationDuration,
              ease: [0.4, 0, 0.2, 1]
            }}
            onAnimationComplete={handleEntryAnimationComplete}
            onClick={handleSkip}
          >
            {/* Large Welcome Text */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="text-center font-display metallic-text"
              style={{
                fontSize: isMobile ? '4rem' : '8rem',
                letterSpacing: '0.05em',
              }}
            >
              {isReturningVisitor ? 'Welcome Back' : 'Welcome'}
            </motion.h1>

            {/* Warm subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="mt-6 text-center font-body"
              style={{
                fontSize: isMobile ? '1rem' : '1.25rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.1em',
              }}
            >
              Let's build something extraordinary
            </motion.p>

            {/* Subtle animated line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="mt-8"
              style={{
                width: isMobile ? '80px' : '120px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--text-muted), transparent)',
              }}
            />

            {/* Skip hint - shows after 500ms */}
            {isSkippable && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="skip-hint absolute bottom-12 text-center font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}
              >
                Press any key or click to continue
              </motion.p>
            )}

            {/* Progress indicator */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5"
              style={{
                backgroundColor: 'var(--accent)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{
                duration: isReturningVisitor ? 0.5 : 1,
                ease: 'linear',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default VaultDoor;
