import type { PortfolioContent } from '../types';

/**
 * Profile and expertise data for Roppy Jack
 * The Vault Master - AI Choreography Wizard
 */
export const profile: PortfolioContent['profile'] = {
  name: 'Prisi Ops',
  title: 'AI-Powered Efficiency',
  imageSrc: '/profile-placeholder.svg',
  bio: 'We architect intelligent automation systems, orchestrating AI agents to transform business operations. With expertise spanning from low-level systems programming to high-level AI orchestration, we help businesses unlock their full potential through cutting-edge AI solutions. Our approach combines technical precision with creative problem-solving to deliver automation that actually works.',
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
    'AI Agent Development',
    'Workflow Automation',
    'System Integration',
    'Custom AI Solutions',
    'Process Optimization',
    'Technical Consulting',
  ],
};

export const contact: PortfolioContent['contact'] = {
  email: 'hello@prisiops.com',
  linkedin: 'https://linkedin.com/company/prisi-ops',
  calendly: 'https://calendly.com/prisi-ops/consultation',
};

export default { profile, expertise, contact };
