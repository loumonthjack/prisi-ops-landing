import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { caseStudies } from '../../data/caseStudies';
import { MetricDashboard } from '../MetricDashboard';
import { MetricChart } from '../MetricChart';
import { TechBadge } from '../TechBadge';
import { contact } from '../../data/profile';

/**
 * CaseStudyDetail Component
 *
 * Full-screen immersive case study page with metrics visualizations,
 * charts, ROI data, and testimonials.
 */

export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  if (!caseStudy) {
    return (
      <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="text-center">
          <h2 className="font-display text-heading mb-4" style={{ color: 'var(--text)' }}>
            Case Study Not Found
          </h2>
          <button onClick={() => navigate(-1)} className="minimal-button">
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={handleClose}
      />

      {/* Close Button - Below theme toggle */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={handleClose}
        className="fixed top-8 right-24 md:right-32 z-50 w-12 h-12 flex items-center justify-center border theme-transition hover-lift"
        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
        aria-label="Close"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="var(--text)"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      </motion.button>

      {/* Content Container */}
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-screen py-8 md:py-16">
          <div className="w-full max-w-[960px] mx-auto px-8 md:px-16">
            {/* Main Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border theme-transition overflow-hidden"
              style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
            >
              <div className="p-6 md:p-12 lg:p-16 space-y-generous overflow-x-hidden">
                {/* Hero Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-comfortable"
                >
                  <div className="flex flex-wrap items-center gap-3 font-mono text-caption" style={{ color: 'var(--text-muted)' }}>
                    <span>{caseStudy.industry}</span>
                    <span>•</span>
                    <span>{caseStudy.duration}</span>
                  </div>

                  <h1 className="font-display text-display-large" style={{ color: 'var(--text)' }}>
                    {caseStudy.title}
                  </h1>

                  <p className="font-body text-body-large" style={{ color: 'var(--text-secondary)' }}>
                    {caseStudy.client}
                  </p>
                </motion.div>

                {/* Problem Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-minimal"
                >
                  <h2 className="font-mono text-caption" style={{ color: 'var(--text-muted)' }}>
                    The Challenge
                  </h2>
                  <p className="font-body text-body-large" style={{ color: 'var(--text)' }}>
                    {caseStudy.problem}
                  </p>
                </motion.div>

                {/* Metrics Dashboard */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-comfortable"
                >
                  <h2 className="font-mono text-caption" style={{ color: 'var(--text-muted)' }}>
                    Key Metrics
                  </h2>
                  <MetricDashboard metrics={caseStudy.heroMetrics} />
                </motion.div>

                {/* Solution Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-minimal"
                >
                  <h2 className="font-mono text-caption" style={{ color: 'var(--text-muted)' }}>
                    Our Solution
                  </h2>
                  <p className="font-body text-body-large" style={{ color: 'var(--text)' }}>
                    {caseStudy.solution}
                  </p>
                </motion.div>

                {/* Charts Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-comfortable"
                >
                  <h2 className="font-mono text-caption" style={{ color: 'var(--text-muted)' }}>
                    Performance Data
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {caseStudy.charts.map((chart, index) => (
                      <motion.div
                        key={chart.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                      >
                        <MetricChart chart={chart} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Outcome Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-minimal"
                >
                  <h2 className="font-mono text-caption" style={{ color: 'var(--text-muted)' }}>
                    The Results
                  </h2>
                  <p className="font-body text-body-large" style={{ color: 'var(--text)' }}>
                    {caseStudy.outcome}
                  </p>
                </motion.div>

                {/* ROI Callout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="minimal-card p-6 border-2"
                  style={{ borderColor: 'var(--text)' }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="font-mono text-caption mb-2" style={{ color: 'var(--text-muted)' }}>
                        Investment
                      </p>
                      <p className="font-display text-heading-large" style={{ color: 'var(--text)' }}>
                        ${caseStudy.roi.investment.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-caption mb-2" style={{ color: 'var(--text-muted)' }}>
                        Annual Savings
                      </p>
                      <p className="font-display text-heading-large" style={{ color: 'var(--text)' }}>
                        ${caseStudy.roi.annualSavings.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-caption mb-2" style={{ color: 'var(--text-muted)' }}>
                        Payback Period
                      </p>
                      <p className="font-display text-heading-large" style={{ color: 'var(--text)' }}>
                        {caseStudy.roi.paybackPeriod}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial */}
                {caseStudy.testimonial && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="minimal-card p-8"
                  >
                    <blockquote className="space-y-comfortable">
                      <p className="font-body text-body-large italic" style={{ color: 'var(--text)' }}>
                        "{caseStudy.testimonial.quote}"
                      </p>
                      <footer className="flex items-center gap-3 font-mono text-caption" style={{ color: 'var(--text-secondary)' }}>
                        <span>{caseStudy.testimonial.author}</span>
                        <span>•</span>
                        <span>{caseStudy.testimonial.role}</span>
                      </footer>
                    </blockquote>
                  </motion.div>
                )}

                {/* Tools Used */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="space-y-minimal"
                >
                  <h2 className="font-mono text-caption" style={{ color: 'var(--text-muted)' }}>
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tools.map((tool) => (
                      <TechBadge key={tool} name={tool} />
                    ))}
                  </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="pt-8 border-t text-center space-y-comfortable"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <h2 className="font-display text-heading-large" style={{ color: 'var(--text)' }}>
                    Achieve Similar Results
                  </h2>
                  <p className="font-body text-body" style={{ color: 'var(--text-secondary)' }}>
                    Let's discuss how we can optimize your operations with AI-powered efficiency.
                  </p>
                  <a
                    href={contact.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="minimal-button inline-block"
                  >
                    Schedule a Consultation
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CaseStudyDetail;
