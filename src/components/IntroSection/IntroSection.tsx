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
          {/* Main Bio */}
          <p
            className="font-body text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            data-testid="bio-main"
          >
            Prisi Ops is an AI-powered operations platform designed to transform how businesses
            work. We combine cutting-edge artificial intelligence with intuitive design to
            automate complex workflows, streamline decision-making, and unlock unprecedented
            levels of efficiency.
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

          {/* Expanded Description */}
          <p
            className="font-body text-sm md:text-base leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
            data-testid="bio-expanded"
          >
            From intelligent task automation to predictive analytics, our suite of AI agents
            work tirelessly behind the scenes—handling everything from market research and
            creative direction to advertising optimization and operational coordination.
            Think of us as your always-on, never-sleeping operations team.
          </p>

          {/* Mission Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-sm md:text-base leading-relaxed pt-2 italic"
            style={{ color: 'var(--text-muted)' }}
            data-testid="bio-mission"
          >
            Our mission is simple: give you back your time so you can focus on what truly
            matters—building, creating, and growing your vision.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default IntroSection;
