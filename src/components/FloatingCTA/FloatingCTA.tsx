import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FloatingCTAProps {
  calendlyUrl: string;
  isVisible?: boolean;
}

export function FloatingCTA({ calendlyUrl, isVisible = true }: FloatingCTAProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Fade in after 2s delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Check if keyboard is visible on mobile (heuristic: viewport height < 500px)
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const checkKeyboard = () => {
      setIsKeyboardVisible(window.innerHeight < 500);
    };

    window.addEventListener('resize', checkKeyboard);
    checkKeyboard();

    return () => window.removeEventListener('resize', checkKeyboard);
  }, []);

  const handleClick = () => {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  if (!shouldRender || !isVisible || isKeyboardVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
        className="floating-cta"
        style={{
          position: 'fixed',
          bottom: '10rem',
          right: '1rem',
          zIndex: 50,
          backgroundColor: 'var(--accent)',
          color: 'var(--bg)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          outline: 'none',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.875rem',
          fontWeight: 500,
          letterSpacing: '0.025em',
          whiteSpace: 'nowrap',
          ...(isExpanded
            ? {
                borderRadius: '28px',
                padding: '0.75rem 1.5rem',
                width: 'auto',
                height: 'auto',
              }
            : {
                borderRadius: '50%',
                padding: '0',
                width: '56px',
                height: '56px',
              }),
        }}
        aria-label="Schedule a consultation call"
        role="button"
        tabIndex={0}
      >
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ scale: isExpanded ? 1 : [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 8 }}
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </motion.svg>

        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden' }}
            >
              Schedule Call
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </AnimatePresence>
  );
}
