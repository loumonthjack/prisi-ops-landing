import { motion, AnimatePresence, type Transition } from 'framer-motion';
import type { VaultPanelProps } from '../../types';

/**
 * VaultPanel Component
 * 
 * A reusable content section styled as a vault compartment.
 * Supports different panel styles (drawer, door, deposit-box) with
 * open/closed states and mechanical transition animations.
 * 
 * Requirements: 2.1, 2.2, 2.5
 */
export function VaultPanel({
  title,
  isOpen,
  onOpen,
  children,
  panelStyle = 'door',
}: VaultPanelProps) {
  // Animation variants based on panel style
  const getAnimationVariants = () => {
    switch (panelStyle) {
      case 'drawer':
        return {
          closed: { y: '100%', opacity: 0 },
          open: { y: 0, opacity: 1 },
        };
      case 'deposit-box':
        return {
          closed: { scaleY: 0, opacity: 0 },
          open: { scaleY: 1, opacity: 1 },
        };
      case 'door':
      default:
        return {
          closed: { rotateY: -90, opacity: 0 },
          open: { rotateY: 0, opacity: 1 },
        };
    }
  };

  const variants = getAnimationVariants();

  // Transition config for mechanical feel
  const transition: Transition = {
    duration: 0.4,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  };

  // Generate rivet positions for panel frame
  const topRivets = Array.from({ length: 6 }, (_, i) => i);
  const sideRivets = Array.from({ length: 4 }, (_, i) => i);

  return (
    <div
      data-testid="vault-panel"
      data-panel-style={panelStyle}
      data-is-open={isOpen}
      className="relative w-full"
    >
      {/* Panel container with enhanced metallic styling */}
      <div className="relative vault-texture-brushed-horizontal vault-border-heavy rounded-lg overflow-hidden">
        {/* Panel header with title */}
        <button
          onClick={onOpen}
          className="w-full px-4 py-3 flex items-center justify-between cursor-pointer
                     bg-gradient-to-b from-vault-metal to-vault-steel hover:from-vault-chrome hover:to-vault-metal 
                     transition-all duration-200
                     border-b-2 border-vault-dark vault-click-feedback"
          aria-expanded={isOpen}
          aria-controls={`panel-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {/* Title with classified document styling */}
          <div className="flex items-center gap-3">
            {/* Lock indicator */}
            <motion.div
              className="w-4 h-4 rounded-full border-2 border-vault-chrome flex items-center justify-center"
              animate={{
                backgroundColor: isOpen ? 'var(--color-vault-chrome)' : 'transparent',
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-vault-white"
                animate={{ scale: isOpen ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
            
            <span className="font-heading text-sm text-vault-light tracking-widest uppercase">
              {title}
            </span>
          </div>

          {/* Mechanical toggle indicator */}
          <motion.div
            className="flex items-center gap-2"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={transition}
          >
            <div className="w-6 h-1 bg-vault-chrome rounded" />
            <motion.div
              className="w-3 h-3 border-t-2 border-r-2 border-vault-chrome"
              style={{ transform: 'rotate(135deg)' }}
            />
          </motion.div>
        </button>

        {/* Frame rivets - top with gradient */}
        <div className="absolute top-1 left-2 right-2 flex justify-between pointer-events-none">
          {topRivets.map((i) => (
            <div
              key={`rivet-top-${i}`}
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-vault-silver to-vault-chrome border border-vault-metal shadow-inner"
            />
          ))}
        </div>

        {/* Panel content with animation */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={`panel-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
              data-testid="vault-panel-content"
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              transition={transition}
              style={{
                transformOrigin: panelStyle === 'deposit-box' ? 'top' : 'left',
                perspective: panelStyle === 'door' ? '1000px' : undefined,
              }}
              className="relative"
            >
              {/* Inner content area with enhanced depth */}
              <div className="p-4 bg-vault-dark vault-seam-deep vault-glow-inner">
                {/* Decorative panel seams */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-vault-metal to-transparent opacity-50" />
                
                {/* Content */}
                <div className="relative z-10">
                  {children}
                </div>

                {/* Bottom seam */}
                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-vault-metal to-transparent opacity-50" />
              </div>

              {/* Side rivets - left with gradient */}
              <div className="absolute left-1 top-2 bottom-2 flex flex-col justify-between pointer-events-none">
                {sideRivets.map((i) => (
                  <div
                    key={`rivet-left-${i}`}
                    className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-vault-silver to-vault-chrome border border-vault-metal shadow-inner"
                  />
                ))}
              </div>

              {/* Side rivets - right with gradient */}
              <div className="absolute right-1 top-2 bottom-2 flex flex-col justify-between pointer-events-none">
                {sideRivets.map((i) => (
                  <div
                    key={`rivet-right-${i}`}
                    className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-vault-silver to-vault-chrome border border-vault-metal shadow-inner"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom frame rivets with gradient */}
        <div className="absolute bottom-1 left-2 right-2 flex justify-between pointer-events-none">
          {topRivets.map((i) => (
            <div
              key={`rivet-bottom-${i}`}
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-vault-silver to-vault-chrome border border-vault-metal shadow-inner"
            />
          ))}
        </div>

        {/* Mechanical hinge indicators based on style - enhanced */}
        {panelStyle === 'door' && (
          <>
            <div className="absolute left-0 top-1/4 w-1.5 h-10 bg-gradient-to-r from-vault-chrome to-vault-metal rounded-r shadow-md" />
            <div className="absolute left-0 top-2/4 w-1.5 h-10 bg-gradient-to-r from-vault-chrome to-vault-metal rounded-r shadow-md" />
            <div className="absolute left-0 top-3/4 w-1.5 h-10 bg-gradient-to-r from-vault-chrome to-vault-metal rounded-r shadow-md" />
          </>
        )}

        {panelStyle === 'drawer' && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gradient-to-b from-vault-chrome to-vault-metal rounded-t shadow-md" />
        )}

        {panelStyle === 'deposit-box' && (
          <>
            <div className="absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-vault-metal to-transparent opacity-40" />
            <div className="absolute right-4 top-14 w-4 h-8 bg-gradient-to-b from-vault-chrome to-vault-metal rounded shadow-md" />
          </>
        )}
      </div>
    </div>
  );
}

export default VaultPanel;
