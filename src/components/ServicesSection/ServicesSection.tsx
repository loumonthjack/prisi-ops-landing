import { motion } from 'framer-motion';

/**
 * ServicesSection Component - Minimalist Edition
 *
 * Focused services display - what we offer.
 * Designed to fit within viewport with clean layout.
 */

import type { Service } from '../../types';

export interface ServicesSectionProps {
  expertise: {
    tools: string[];
    services: Service[];
  };
}

export function ServicesSection({ expertise }: ServicesSectionProps) {
  return (
    <section
      data-testid="services-section"
      className="w-full h-full flex items-center justify-center px-6 md:px-12"
    >
      <br/>
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
          className="font-display text-heading-large metallic-text tracking-wide mb-8"
        >
          Solutions
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-base md:text-lg mb-14 max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          Transform your operations with AI
        </motion.p>

        {/* Subtle divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            width: '100px',
            height: '2px',
            margin: '1.0rem auto 2.0rem',
            transformOrigin: 'center',
            background: 'linear-gradient(90deg, transparent, var(--text-muted), transparent)',
          }}
        />

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-testid="services-grid"
        >
          {expertise.services.map((service, index) => (
            <motion.div
              key={`service-${index}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
              className="p-6 rounded-xl text-left transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="font-mono text-sm flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-1"
                  style={{
                    color: 'var(--text-secondary)',
                    backgroundColor: 'var(--bg)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3
                    className="font-body text-base md:text-lg font-semibold mb-2"
                    style={{ color: 'var(--text)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-body text-sm md:text-base leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ServicesSection;

