import { motion } from 'framer-motion';

/**
 * AboutSection Component - Minimalist Edition
 *
 * Clean, elegant profile display with generous spacing and refined typography.
 * Focused on who I am, what I do, and services offered.
 */
export interface AboutSectionProps {
  profile: {
    name: string;
    title: string;
    imageSrc: string;
    bio: string;
    location: string;
  };
  expertise: {
    tools: string[];
    services: string[];
  };
}

export function AboutSection({ profile, expertise }: AboutSectionProps) {
  return (
    <section data-testid="about-section" className="w-full space-y-generous">
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-comfortable"
      >
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div
            className="w-48 h-48 overflow-hidden theme-transition border-2"
            style={{
              borderRadius: '50%',
              borderColor: 'var(--border)'
            }}
          >
            {profile.imageSrc ? (
              <img
                src={profile.imageSrc}
                alt={profile.name}
                className="w-full h-full object-cover"
                data-testid="profile-image"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center theme-transition"
                style={{ backgroundColor: 'var(--surface)' }}
                data-testid="profile-placeholder"
              >
                <span
                  className="font-display text-6xl"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {profile.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Name & Title */}
        <div className="space-y-minimal">
          <h2
            className="font-display text-heading-large"
            style={{ color: 'var(--text)' }}
            data-testid="profile-name"
          >
            {profile.name}
          </h2>
          <p
            className="font-body text-body-large"
            style={{ color: 'var(--text-secondary)' }}
            data-testid="profile-title"
          >
            {profile.title}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-3">
          <svg
            className="w-4 h-4"
            style={{ color: 'var(--text-muted)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span
            className="font-mono text-caption"
            style={{ color: 'var(--text-muted)' }}
            data-testid="profile-location"
          >
            {profile.location}
          </span>
        </div>

        {/* Bio */}
        <div className="max-w-2xl mx-auto">
          <p
            className="font-body text-body-large leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            data-testid="profile-bio"
          >
            {profile.bio}
          </p>
        </div>
      </motion.div>

      {/* Divider */}
      <hr className="minimal-divider" />

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-comfortable"
      >
        <h3
          className="font-display text-heading text-center"
          style={{ color: 'var(--text)' }}
        >
          Services
        </h3>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto"
          data-testid="expertise-services"
        >
          {expertise.services.map((service, index) => (
            <div
              key={service}
              className="minimal-card hover-lift"
            >
              <div className="flex items-start gap-4">
                <span
                  className="font-mono text-small flex-shrink-0"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p
                  className="font-body text-body"
                  style={{ color: 'var(--text)' }}
                >
                  {service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <hr className="minimal-divider" />

      {/* DFW Focus Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="minimal-card max-w-3xl mx-auto"
        data-testid="dfw-message"
      >
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div
            className="flex-shrink-0 w-16 h-16 flex items-center justify-center border-2 theme-transition"
            style={{
              borderRadius: '50%',
              borderColor: 'var(--border)',
              backgroundColor: 'var(--surface)'
            }}
          >
            <svg
              className="w-8 h-8"
              style={{ color: 'var(--text)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
          </div>

          <div className="flex-1 space-y-minimal">
            <h4
              className="font-display text-heading"
              style={{ color: 'var(--text)' }}
            >
              DFW Businesses
            </h4>
            <p
              className="font-body text-body leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Specializing in AI implementation for small businesses in the Dallas-Fort Worth area.
              Let's unlock the power of intelligent automation for your operations.
            </p>
            <span
              className="inline-block font-mono text-small"
              style={{ color: 'var(--text-muted)' }}
            >
              Local · Focused · Effective
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
