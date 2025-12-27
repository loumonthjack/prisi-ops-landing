import { motion } from 'framer-motion';
import type { SecurityLevelIndicatorProps } from '../../types';

/**
 * SecurityLevelIndicator Component
 * 
 * A progress indicator styled as vault depth markers or security clearance levels.
 * Displays current position and total levels with metallic vault styling.
 * 
 * Requirements: 2.3
 */
export function SecurityLevelIndicator({
  totalLevels,
  currentLevel,
  levelLabels,
}: SecurityLevelIndicatorProps) {
  // Generate level markers
  const levels = Array.from({ length: totalLevels }, (_, i) => i);

  return (
    <div
      data-testid="security-level-indicator"
      className="flex flex-col items-center gap-1 p-3 rounded-lg vault-texture-brushed vault-border"
      role="progressbar"
      aria-valuenow={currentLevel}
      aria-valuemin={0}
      aria-valuemax={totalLevels - 1}
      aria-label={`Security clearance level ${currentLevel + 1} of ${totalLevels}`}
    >
      {/* Header */}
      <div className="w-full text-center mb-2">
        <span className="font-heading text-xs text-vault-chrome tracking-widest uppercase">
          Clearance
        </span>
      </div>

      {/* Level markers - vertical layout */}
      <div className="flex flex-col-reverse gap-1.5 relative">
        {/* Connecting line */}
        <div className="absolute left-1/2 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-vault-metal" />
        
        {levels.map((level) => {
          const isActive = level === currentLevel;
          const isUnlocked = level <= currentLevel;
          const label = levelLabels?.[level] ?? `L${level + 1}`;

          return (
            <motion.div
              key={level}
              data-testid={`level-marker-${level}`}
              data-level={level}
              data-active={isActive}
              className="relative flex items-center gap-2 z-10"
              initial={false}
              animate={{
                scale: isActive ? 1.05 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Level marker */}
              <motion.div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center
                  border-2 transition-colors duration-300
                  ${isActive
                    ? 'bg-vault-chrome border-vault-light shadow-lg'
                    : isUnlocked
                      ? 'bg-vault-steel border-vault-chrome'
                      : 'bg-vault-dark border-vault-metal'
                  }
                `}
                animate={{
                  boxShadow: isActive
                    ? '0 0 15px rgba(255, 255, 255, 0.3), inset 0 0 8px rgba(255, 255, 255, 0.1)'
                    : '0 0 0 rgba(0, 0, 0, 0)',
                }}
              >
                {/* Inner indicator */}
                <motion.div
                  className={`
                    w-3 h-3 rounded-full
                    ${isActive
                      ? 'bg-vault-white'
                      : isUnlocked
                        ? 'bg-vault-silver'
                        : 'bg-vault-metal'
                    }
                  `}
                  animate={{
                    scale: isActive ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isActive ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>

              {/* Level label */}
              <span
                className={`
                  font-mono text-xs tracking-wider min-w-[40px]
                  ${isActive
                    ? 'text-vault-white font-bold'
                    : isUnlocked
                      ? 'text-vault-silver'
                      : 'text-vault-metal'
                  }
                `}
              >
                {label}
              </span>

              {/* Active indicator arrow */}
              {isActive && (
                <motion.div
                  className="absolute -left-3 w-2 h-2 border-t-2 border-r-2 border-vault-chrome rotate-45"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Footer with current level display */}
      <div className="w-full mt-2 pt-2 border-t border-vault-metal">
        <div className="flex justify-between items-center">
          <span className="font-mono text-xs text-vault-metal">DEPTH</span>
          <span className="font-heading text-sm text-vault-chrome">
            {currentLevel + 1}/{totalLevels}
          </span>
        </div>
      </div>

      {/* Decorative rivets */}
      <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-vault-chrome border border-vault-metal opacity-50" />
      <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-vault-chrome border border-vault-metal opacity-50" />
      <div className="absolute bottom-1 left-1 w-2 h-2 rounded-full bg-vault-chrome border border-vault-metal opacity-50" />
      <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-vault-chrome border border-vault-metal opacity-50" />
    </div>
  );
}

export default SecurityLevelIndicator;
