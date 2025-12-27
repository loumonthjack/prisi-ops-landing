import { motion } from 'framer-motion';

/**
 * ServicesSection Component - Minimalist Edition
 *
 * Focused services display - what we offer.
 * Designed to fit within viewport with clean layout.
 */

export interface ServicesSectionProps{
  expertise: {
    tools: string[];
    services: string[];
  };
}

export function ServicesSection({ expertise }: ServicesSectionProps) {
  return (
    <section
      data-testid="services-section"
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
          Solutions
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-base md:text-lg mb-10 max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          Transform your operations with AI
        </motion.p>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          data-testid="services-grid"
        >
          {expertise.services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
              className="p-6 rounded-xl text-left transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="font-mono text-sm flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    color: 'var(--text-secondary)',
                    backgroundColor: 'var(--bg)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p
                  className="font-body text-base md:text-lg font-medium"
                  style={{ color: 'var(--text)' }}
                >
                  {service}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
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

export default ServicesSection;

