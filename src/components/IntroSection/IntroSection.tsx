import { motion } from 'framer-motion';

/**
 * IntroSection Component - Minimalist Edition
 *
 * Clean, focused introduction to Prisi Ops.
 * Simple bio content with elegant typography.
 * Designed to fit within viewport without scrolling.
 */

export function IntroSection() {
  return (
    <section
      data-testid="intro-section"
      className="w-full h-full flex items-center justify-center px-6 md:px-12"
    >
      <br/>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        className="text-center max-w-4xl"
      >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-heading-large metallic-text tracking-wide mb-12"
        >
          Vision
        </motion.h2>

        {/* Bio Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Pain Point Opening */}
          <p
            className="font-body text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            data-testid="bio-main"
          >
            If you&apos;re an operations manager at a growing DFW business, you know the challenge:
            more work, same team size, limited budget. Your team is drowning in manual tasks—processing
            documents, responding to customer inquiries, coordinating workflows—and it&apos;s holding your growth back.
          </p>
          {/* Subtle divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            width: '100px',
            height: '2px',
            margin: '1.0rem auto 1.0rem',
            transformOrigin: 'center',
            background: 'linear-gradient(90deg, transparent, var(--text-muted), transparent)',
          }}
        />

          {/* Value Proposition */}
          <p
            className="font-body text-sm md:text-base leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
            data-testid="bio-expanded"
          >
            Prisi Ops builds AI automation systems that handle these repetitive operations tasks for you.
            Think of it as hiring a team of tireless digital employees that work 24/7, don&apos;t make errors,
            and cost a fraction of a human hire. We&apos;re based in Dallas-Fort Worth and understand the unique
            challenges of Texas businesses—from rapid growth management to finding skilled talent in a competitive market.
          </p>

          {/* What We Do - AI Explained */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-sm md:text-base leading-relaxed pt-2"
            style={{ color: 'var(--text-muted)' }}
            data-testid="bio-mission"
          >
            Our AI agents are specialized software systems that can read documents, make decisions based on
            rules you set, communicate with customers, and coordinate complex workflows—all without human intervention.
            Our clients typically see 40-80% cost reductions and payback periods of 6-8 months.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default IntroSection;
