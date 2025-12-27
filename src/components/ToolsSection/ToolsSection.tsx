import { motion } from 'framer-motion';

/**
 * ToolsSection Component
 *
 * Displays the tech stack and tools used by Prisi Ops.
 * Matches the minimalist design of other sections.
 */

export interface ToolsSectionProps {
  tools: string[];
}

export function ToolsSection({ tools }: ToolsSectionProps) {
  return (
    <section
      data-testid="tools-section"
      className="w-full h-full flex items-center justify-center px-6 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        className="w-full max-w-4xl text-center"
      >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-heading-large metallic-text tracking-wide mb-4"
        >
          Tech Stack
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-body-large mb-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          The tools we use to build intelligent automation
        </motion.p>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-comfortable"
          data-testid="tools-grid"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="minimal-card p-comfortable hover-lift"
            >
              <p className="font-mono text-body" style={{ color: 'var(--text)' }}>
                {tool}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            width: '100px',
            height: '2px',
            margin: '2.5rem auto 0',
            transformOrigin: 'center',
            background: 'linear-gradient(90deg, transparent, var(--text-muted), transparent)',
          }}
        />
      </motion.div>
    </section>
  );
}

export default ToolsSection;
