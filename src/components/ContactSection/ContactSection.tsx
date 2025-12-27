import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '../../lib/email';
import type { ContactInfo } from '../../types';

/**
 * ContactSection Component - Minimalist Edition
 *
 * Displays contact information and contact form with clean, elegant styling
 * matching the minimalist design system.
 */

const SUBJECT_OPTIONS = [
  'General Inquiry',
  'AI Agent Development',
  'Workflow Automation',
  'System Integration',
  'Technical Consulting',
  'Partnership Opportunity',
  'Other',
];

export interface ContactSectionProps {
  contact: ContactInfo;
}

export function ContactSection({ contact }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: SUBJECT_OPTIONS[0],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendEmail(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: SUBJECT_OPTIONS[0],
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactLinks = [
    {
      key: 'email',
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    contact.linkedin && {
      key: 'linkedin',
      label: 'LinkedIn',
      value: 'Connect',
      href: contact.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    contact.calendly && {
      key: 'calendly',
      label: 'Schedule',
      value: 'Book a Call',
      href: contact.calendly,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ].filter(Boolean) as Array<{
    key: string;
    label: string;
    value: string;
    href: string;
    icon: React.ReactNode;
  }>;

  return (
    <section
      data-testid="contact-section"
      className="w-full h-full flex flex-col items-center justify-start px-6 md:px-12 py-8 overflow-y-auto"
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
          Connect
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-base md:text-lg mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          Ready to transform your operations?
        </motion.p>

        {/* Two Column Layout: Form + Contact Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-left"
          >
            <h3 className="font-display text-heading mb-6" style={{ color: 'var(--text)' }}>
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block font-mono text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="minimal-input w-full"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block font-mono text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="minimal-input w-full"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Dropdown */}
              <div>
                <label htmlFor="subject" className="block font-mono text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                  SUBJECT
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="minimal-input w-full"
                  style={{ cursor: 'pointer' }}
                >
                  {SUBJECT_OPTIONS.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block font-mono text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="minimal-input w-full resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="minimal-button w-full disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-body text-sm text-center"
                  style={{ color: 'var(--trend-positive)' }}
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-body text-sm text-center"
                  style={{ color: 'var(--trend-negative)' }}
                >
                  Failed to send message. Please try again or email us directly.
                </motion.p>
              )}
            </form>
          </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-left"
          >
            <h3 className="font-display text-heading mb-6" style={{ color: 'var(--text)' }}>
              Other ways to connect
            </h3>

            <div className="space-y-4" data-testid="contact-links">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.key}
              href={link.href}
              target={link.key !== 'email' ? '_blank' : undefined}
              rel={link.key !== 'email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              data-testid={`contact-link-${link.key}`}
              className="flex items-center gap-4 p-4 transition-all duration-300 hover:scale-[1.02] group"
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                style={{
                  color: 'var(--text-secondary)',
                }}
              >
                {link.icon}
              </div>

              {/* Link content */}
              <div className="flex-1">
                <span
                  className="block font-mono text-xs mb-1"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {link.label}
                </span>
                <span
                  className="font-body block text-sm md:text-base font-medium"
                  style={{ color: 'var(--text)' }}
                >
                  {link.value}
                </span>
              </div>

              {/* Arrow indicator */}
              <div
                className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: 'var(--text-muted)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
            </div>
          </motion.div>
        </div>

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

export default ContactSection;

