import { useState } from 'react';
import { motion } from 'framer-motion';
import { CaseStudyCard } from '../CaseStudyCard';
import type { CaseStudy } from '../../types';

/**
 * CaseStudiesSection Component - Minimalist Edition
 *
 * Clean presentation of case studies with elegant cards.
 * Designed to fit within viewport with scrollable cards if needed.
 */

export interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

export function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      data-testid="case-studies-section"
      className="w-full h-full flex flex-col items-center justify-start px-6 md:px-12 py-8"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-display text-heading-large metallic-text tracking-wide mb-4 text-center"
      >
        Impact
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-body text-base md:text-lg mb-8 max-w-2xl mx-auto text-center"
        style={{ color: 'var(--text-secondary)' }}
      >
        Real results for real businesses
      </motion.p>

      {/* Case Studies List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-3xl space-y-4"
      >
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={caseStudy.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <CaseStudyCard
              caseStudy={caseStudy}
              isExpanded={expandedId === caseStudy.id}
              onToggle={() => handleToggle(caseStudy.id)}
            />
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
    </section>
  );
}

export default CaseStudiesSection;

