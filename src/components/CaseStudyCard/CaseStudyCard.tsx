import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { CaseStudyCardProps } from '../../types';
import { TechBadge } from '../TechBadge';

/**
 * CaseStudyCard Component - Minimalist Edition
 *
 * Clean, elegant case study presentation with expand/collapse.
 */
export function CaseStudyCard({ caseStudy, isExpanded, onToggle }: CaseStudyCardProps) {
  const { title, client, problem, solution, outcome, tools } = caseStudy;
  const navigate = useNavigate();

  return (
    <div data-testid="case-study-card" className="minimal-card hover-lift">
      {/* Card Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between cursor-pointer text-left"
        aria-expanded={isExpanded}
        aria-controls={`case-study-content-${caseStudy.id}`}
      >
        <div className="flex-1">
          <h3
            className="font-display text-heading mb-2"
            style={{ color: 'var(--text)' }}
          >
            {title}
          </h3>
          <p
            className="font-mono text-caption"
            style={{ color: 'var(--text-muted)' }}
          >
            {client}
          </p>
        </div>

        {/* Expand/collapse indicator */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: 'var(--text-secondary)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`case-study-content-${caseStudy.id}`}
            data-testid="case-study-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="pt-6 space-y-comfortable">
              {/* Problem */}
              <div className="space-y-minimal">
                <h4
                  data-testid="case-study-problem-label"
                  className="font-mono text-caption"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Problem
                </h4>
                <p
                  data-testid="case-study-problem"
                  className="font-body text-body"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {problem}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-minimal">
                <h4
                  data-testid="case-study-solution-label"
                  className="font-mono text-caption"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Solution
                </h4>
                <p
                  data-testid="case-study-solution"
                  className="font-body text-body"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {solution}
                </p>
              </div>

              {/* Outcome */}
              <div className="space-y-minimal">
                <h4
                  data-testid="case-study-outcome-label"
                  className="font-mono text-caption"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Outcome
                </h4>
                <p
                  data-testid="case-study-outcome"
                  className="font-body text-body"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {outcome}
                </p>
              </div>

              {/* Tools */}
              {tools && tools.length > 0 && (
                <div className="space-y-minimal pt-4">
                  <h4
                    data-testid="case-study-tools-label"
                    className="font-mono text-caption"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Tools Used
                  </h4>
                  <div
                    data-testid="case-study-tools"
                    className="flex flex-wrap gap-2"
                  >
                    {tools.map((tool) => (
                      <TechBadge key={tool} name={tool} />
                    ))}
                  </div>
                </div>
              )}

              {/* View Full Case Study Button */}
              <div className="pt-6 border-t mt-6" style={{ borderColor: 'var(--border)' }}>
                <button
                  onClick={() => navigate(`/case-studies/${caseStudy.id}`)}
                  className="minimal-button w-full"
                >
                  View Full Case Study →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CaseStudyCard;
