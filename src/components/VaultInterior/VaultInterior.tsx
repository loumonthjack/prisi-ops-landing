import { useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IntroSection } from '../IntroSection';
import { ServicesSection } from '../ServicesSection';
import { CaseStudiesSection } from '../CaseStudiesSection';
import { WorkflowsSection } from '../WorkflowsSection';
import { ToolsSection } from '../ToolsSection';
import { ContactSection } from '../ContactSection';
import { FloatingCTA } from '../FloatingCTA';
import { expertise, contact, caseStudies, workflows } from '../../data';
import type { VaultInteriorProps } from '../../types';

/**
 * VaultInterior Component - Minimalist Edition
 *
 * Focused, bite-sized pages optimized for engagement.
 * Strategic conversion flow with minimal scrolling per page.
 */

interface SectionConfig {
  id: string;
  title: string;
  label: string;
}

// Optimized 6-page structure with minimal scroll:
// 1. Intro - Quick who/what (1 screen)
// 2. Services - What I offer (1 screen)
// 3. Process - Workflows (interactive, 1 screen) - Methodology before results
// 4. Work - Case studies (expandable cards, 1-2 screens) - Results after methodology
// 5. Tools - Tech stack (1 screen)
// 6. Connect - CTA (1 screen)
const SECTIONS: SectionConfig[] = [
  { id: 'intro', title: 'Prisi Ops', label: 'Intro' },
  { id: 'services', title: 'Services', label: 'Services' },
  { id: 'process', title: 'Process', label: 'Process' },
  { id: 'work', title: 'Work', label: 'Work' },
  { id: 'tools', title: 'Tech Stack', label: 'Tools' },
  { id: 'connect', title: 'Connect', label: 'Connect' },
];

export function VaultInterior({ currentSection, onNavigate }: VaultInteriorProps) {
  const totalSections = SECTIONS.length;

  const clampedSection = useMemo(
    () => Math.max(0, Math.min(currentSection, totalSections - 1)),
    [currentSection, totalSections]
  );

  const currentSectionConfig = SECTIONS[clampedSection];

  const handlePrevious = useCallback(() => {
    if (clampedSection > 0) {
      onNavigate(clampedSection - 1);
    }
  }, [clampedSection, onNavigate]);

  const handleNext = useCallback(() => {
    if (clampedSection < totalSections - 1) {
      onNavigate(clampedSection + 1);
    }
  }, [clampedSection, totalSections, onNavigate]);

  const canGoPrevious = clampedSection > 0;
  const canGoNext = clampedSection < totalSections - 1;

  // Hide FloatingCTA on Connect section (index 5) to avoid redundancy
  const shouldShowCTA = useMemo(() => {
    return clampedSection !== 5;
  }, [clampedSection]);

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden theme-transition"
      style={{ backgroundColor: 'var(--bg)' }}
      data-testid="vault-interior"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation Dots - Top Center (Desktop Only) */}
      <nav className="hidden md:absolute md:flex md:top-8 md:left-1/2 md:-translate-x-1/2 md:z-20 md:px-4" aria-label="Portfolio navigation">
        <div className="flex items-center gap-compact md:gap-comfortable">
          {SECTIONS.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onNavigate(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onNavigate(index);
                }
              }}
              className="group relative"
              aria-label={`Go to ${section.label}`}
              aria-current={index === clampedSection ? 'step' : undefined}
            >
              <motion.div
                className="w-2 h-2 md:w-2.5 md:h-2.5 transition-all theme-transition"
                style={{
                  backgroundColor: index === clampedSection ? 'var(--text)' : 'var(--border)',
                  borderRadius: '50%'
                }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              />
              <span
                className="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 font-mono text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity theme-transition"
                style={{ color: 'var(--text-secondary)' }}
              >
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content - Minimal Scroll */}
      <main className="h-full overflow-y-auto pt-24 md:pt-40 pb-56 md:pb-32">
        <div className="container-luxury">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSectionConfig.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              data-testid="section-content"
            >
              {/* Section Content - Each designed for 1 screen */}
              {currentSectionConfig.id === 'intro' && (
                <IntroSection />
              )}
              {currentSectionConfig.id === 'services' && (
                <ServicesSection expertise={expertise} />
              )}
              {currentSectionConfig.id === 'process' && (
                <WorkflowsSection workflows={workflows} />
              )}
              {currentSectionConfig.id === 'work' && (
                <CaseStudiesSection caseStudies={caseStudies} />
              )}
              {currentSectionConfig.id === 'tools' && (
                <ToolsSection tools={expertise.tools} />
              )}
              {currentSectionConfig.id === 'connect' && (
                <ContactSection contact={contact} />
              )}
            </motion.div>
          </AnimatePresence>


        </div>
      </main>

      {/* Fixed Bottom Navigation & Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-20 pb-4 md:pb-6" style={{ backgroundColor: 'var(--bg)' }}>
        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-6 md:gap-8 mb-3">
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className="minimal-button disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous section"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
            <span>Prev</span>
          </button>

          <span
            className="font-mono text-small"
            style={{ color: 'var(--text-muted)' }}
          >
            {String(clampedSection + 1).padStart(2, '0')} / {String(totalSections).padStart(2, '0')}
          </span>

          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="minimal-button disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next section"
          >
            <span>Next</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>
        </div>
        <br/>
        {/* Footer Links */}
        <nav className="flex flex-wrap justify-center gap-3 md:gap-6" aria-label="Legal">
          <a
            href="/terms"
            className="font-mono hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-muted)', fontSize: '0.6875rem' }}
          >
            Terms
          </a>
          <span style={{ color: 'var(--border)' }}>·</span>
          <a
            href="/sitemap"
            className="font-mono hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-muted)', fontSize: '0.6875rem' }}
          >
            Sitemap
          </a>
          <span style={{ color: 'var(--border)' }}>·</span>
          <a
            href="/privacy"
            className="font-mono hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-muted)', fontSize: '0.6875rem' }}
          >
            Privacy
          </a>
        </nav>
      </div>

      {/* Floating CTA Button - Hidden on Contact section */}
      {contact.calendly && (
        <FloatingCTA calendlyUrl={contact.calendly} isVisible={shouldShowCTA} />
      )}
    </motion.div>
  );
}

export default VaultInterior;
