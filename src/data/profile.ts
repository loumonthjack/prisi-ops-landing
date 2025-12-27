import type { PortfolioContent } from '../types';

/**
 * Profile and expertise data for Roppy Jack
 * The Vault Master - AI Choreography Wizard
 */
export const profile: PortfolioContent['profile'] = {
  name: 'Prisi Ops',
  title: 'AI-Powered Efficiency',
  imageSrc: '/profile-placeholder.svg',
  bio: 'We help Dallas-Fort Worth businesses automate their operations with AI. Whether it\'s processing hundreds of documents per day, responding to customer inquiries instantly, or coordinating complex workflows, we build custom AI systems that save you time and money. Our clients typically see 40-80% cost reductions and payback periods of 6-8 months.',
  location: 'Dallas-Fort Worth, TX',
};

export const expertise: PortfolioContent['expertise'] = {
  tools: [
    'Golang',
    'TypeScript',
    'n8n',
    'LangChain',
    'CrewAI',
    'Python',
    'React',
    'Node.js',
  ],
  services: [
    {
      name: 'Custom AI Agents That Handle Your Repetitive Tasks',
      description: 'We build AI systems that process documents, answer customer questions, qualify leads, and coordinate workflows—saving your team 15-30 hours per week on average.',
    },
    {
      name: 'End-to-End Workflow Automation',
      description: 'Connect your existing tools (Salesforce, HubSpot, QuickBooks, etc.) with AI that routes work, makes decisions, and keeps everything moving without manual intervention.',
    },
    {
      name: 'Seamless Integration With Your Current Systems',
      description: 'We work with your existing software stack—no need to replace what\'s working. Our AI agents integrate with 500+ business tools you already use.',
    },
    {
      name: 'Tailored Solutions for Your Specific Operations Challenges',
      description: 'Every business is different. We analyze your unique bottlenecks and build AI systems that solve your specific problems, not generic off-the-shelf tools.',
    },
    {
      name: 'Operations Process Analysis & Improvement',
      description: 'Before we automate, we optimize. We\'ll identify your biggest time-wasters and design streamlined processes that work better with or without AI.',
    },
    {
      name: 'AI Strategy Consulting for Operations Leaders',
      description: 'Not sure where to start with AI? We\'ll audit your operations, identify high-ROI automation opportunities, and create a phased implementation roadmap.',
    },
  ],
};

export const contact: PortfolioContent['contact'] = {
  email: 'hello@prisiops.com',
  linkedin: 'https://linkedin.com/company/prisi-ops',
  calendly: 'https://calendly.com/prisi-ops/consultation',
};

export default { profile, expertise, contact };
