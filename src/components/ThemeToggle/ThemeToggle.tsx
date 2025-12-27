import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="toggle-track"
        initial={false}
        animate={{
          backgroundColor: theme === 'dark' ? '#1a1a1a' : '#e5e5e5',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="toggle-thumb"
          initial={false}
          animate={{
            x: theme === 'dark' ? 0 : 20,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        >
          <motion.div
            initial={false}
            animate={{
              rotate: theme === 'dark' ? 0 : 180,
            }}
            transition={{ duration: 0.3 }}
          >
            {theme === 'dark' ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="3" fill="currentColor" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="3" fill="currentColor" />
              </svg>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
      <span className="toggle-label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  );
}
