import type { CaseStudy } from '../types';

/**
 * Case studies showcasing AI-powered efficiency solutions for businesses
 * Focus on metrics, ROI, and demonstrable business value
 */
export const caseStudies: CaseStudy[] = [
  {
    id: 'ai-operations-command-center',
    title: 'AI Operations Command Center',
    client: 'Mid-Market SaaS Company',
    industry: 'Software as a Service',
    duration: '8 weeks',
    problem:
      'DevOps team spending 30+ hours/week on manual deployment coordination, incident response, and system monitoring. Alert fatigue leading to missed critical issues. No unified view of system health across 40+ microservices.',
    solution:
      'Built an AI-powered operations command center using LangChain agents for intelligent alert triage, CrewAI for orchestrating incident response workflows, and n8n for cross-platform automation. The system monitors 40+ services, auto-remediates common issues, and escalates complex problems with full context.',
    outcome:
      'Operations overhead reduced by 82%. Mean time to resolution (MTTR) dropped from 2.3 hours to 18 minutes. Zero critical incidents missed since deployment. Team now focuses on strategic improvements instead of firefighting.',
    tools: ['LangChain', 'CrewAI', 'n8n', 'Python', 'TypeScript'],
    heroMetrics: [
      {
        id: 'time-saved',
        label: 'Weekly Hours Saved',
        value: 24.6,
        unit: 'hrs',
        prefix: '+',
        trend: 'up',
        description: '82% reduction in manual operations work'
      },
      {
        id: 'mttr',
        label: 'MTTR Reduction',
        value: 87,
        unit: '%',
        prefix: '-',
        trend: 'down',
        description: 'From 2.3 hours to 18 minutes average'
      },
      {
        id: 'cost-savings',
        label: 'Annual Cost Savings',
        value: 156000,
        unit: '$',
        prefix: '+',
        trend: 'up',
        description: 'Labor costs + reduced downtime'
      },
      {
        id: 'incidents',
        label: 'Auto-Resolved Incidents',
        value: 94,
        unit: '%',
        prefix: '',
        trend: 'up',
        description: 'Only 6% require human intervention'
      }
    ],
    charts: [
      {
        id: 'mttr-timeline',
        type: 'line',
        title: 'Mean Time to Resolution Over Time',
        description: 'Dramatic improvement in incident response speed',
        data: [
          { label: 'Week 1', value: 138 },
          { label: 'Week 4', value: 95 },
          { label: 'Week 8', value: 45 },
          { label: 'Week 12', value: 22 },
          { label: 'Week 16', value: 18 },
        ],
        dataKey: 'value',
        xAxisKey: 'label'
      },
      {
        id: 'cost-comparison',
        type: 'bar',
        title: 'Before vs. After: Monthly Operations Cost',
        data: [
          { label: 'Before AI', value: 18500, category: 'manual' },
          { label: 'After AI', value: 3200, category: 'automated' },
          { label: 'Monthly Savings', value: 15300, category: 'savings' }
        ],
        dataKey: 'value',
        xAxisKey: 'label'
      },
      {
        id: 'roi-projection',
        type: 'area',
        title: 'Cumulative Cost Savings',
        description: 'ROI over 12 months',
        data: [
          { label: 'Month 1', value: -25000 },
          { label: 'Month 2', value: -9700 },
          { label: 'Month 3', value: 5600 },
          { label: 'Month 6', value: 66500 },
          { label: 'Month 12', value: 158700 }
        ],
        dataKey: 'value',
        xAxisKey: 'label'
      }
    ],
    roi: {
      investment: 25000,
      annualSavings: 183600,
      paybackPeriod: '6 weeks'
    },
    testimonial: {
      quote: "This AI system transformed our operations team from reactive firefighters to proactive strategists. The time savings alone paid for itself in weeks.",
      author: "Sarah Chen",
      role: "VP of Engineering"
    }
  },
  {
    id: 'intelligent-document-processing',
    title: 'Intelligent Document Processing Pipeline',
    client: 'Regional Insurance Provider',
    industry: 'Insurance',
    duration: '10 weeks',
    problem:
      'Manual processing of 2,000+ insurance claims per month. Average processing time of 6-8 days per claim. 12% error rate from manual data entry causing claim delays and customer frustration. High labor costs with limited scalability.',
    solution:
      'Deployed AI document processing pipeline using LangChain for intelligent document parsing and entity extraction, custom Golang microservices for high-performance data validation, and n8n for workflow orchestration. System extracts data from PDFs, validates against business rules, flags anomalies, and routes to appropriate departments.',
    outcome:
      'Processing time reduced by 89%, from 6-8 days to just 8 hours average. Data entry errors dropped 96% to only 0.5%. Processing capacity increased 3.2x with same headcount. $247,000 annual labor cost savings realized.',
    tools: ['LangChain', 'Golang', 'n8n', 'Python', 'TypeScript'],
    heroMetrics: [
      {
        id: 'processing-speed',
        label: 'Faster Processing',
        value: 89,
        unit: '%',
        prefix: '+',
        trend: 'up',
        description: 'From 6-8 days to 8 hours'
      },
      {
        id: 'error-reduction',
        label: 'Error Reduction',
        value: 96,
        unit: '%',
        prefix: '-',
        trend: 'down',
        description: 'From 12% to 0.5% error rate'
      },
      {
        id: 'annual-savings',
        label: 'Annual Labor Savings',
        value: 247000,
        unit: '$',
        prefix: '+',
        trend: 'up',
        description: 'Reduced manual processing costs'
      },
      {
        id: 'capacity',
        label: 'Capacity Increase',
        value: 3.2,
        unit: 'x',
        prefix: '',
        trend: 'up',
        description: 'Same team, 3.2x throughput'
      }
    ],
    charts: [
      {
        id: 'processing-time',
        type: 'bar',
        title: 'Average Processing Time Comparison',
        data: [
          { label: 'Manual Process', value: 168, category: 'before' },
          { label: 'AI-Powered', value: 8, category: 'after' },
        ],
        dataKey: 'value',
        xAxisKey: 'label'
      },
      {
        id: 'error-rate-timeline',
        type: 'line',
        title: 'Error Rate Improvement Over Time',
        description: 'Gradual improvement as AI model learned business rules',
        data: [
          { label: 'Week 1', value: 8.5 },
          { label: 'Week 3', value: 5.2 },
          { label: 'Week 6', value: 2.8 },
          { label: 'Week 10', value: 0.9 },
          { label: 'Week 14', value: 0.5 },
        ],
        dataKey: 'value',
        xAxisKey: 'label'
      },
      {
        id: 'cost-breakdown',
        type: 'bar',
        title: 'Annual Cost Breakdown',
        data: [
          { label: 'Previous Labor Cost', value: 320000, category: 'before' },
          { label: 'AI System Cost', value: 48000, category: 'tech' },
          { label: 'Reduced Labor Cost', value: 73000, category: 'after' },
          { label: 'Net Annual Savings', value: 247000, category: 'savings' }
        ],
        dataKey: 'value',
        xAxisKey: 'label'
      }
    ],
    roi: {
      investment: 48000,
      annualSavings: 247000,
      paybackPeriod: '10 weeks'
    },
    testimonial: {
      quote: "We were skeptical about AI handling sensitive insurance documents, but the accuracy and speed exceeded our expectations. Our claims team loves it.",
      author: "Michael Rodriguez",
      role: "Director of Claims Operations"
    }
  },
  {
    id: 'customer-engagement-intelligence',
    title: 'Customer Engagement Intelligence Platform',
    client: 'E-commerce Brand',
    industry: 'E-commerce ($15M ARR)',
    duration: '12 weeks',
    problem:
      'Customer support overwhelmed with 500+ daily inquiries across email, chat, and social media. 24-hour average response time leading to cart abandonment. Missed sales opportunities from slow engagement. No insights into customer sentiment trends or pain points.',
    solution:
      'Deployed CrewAI multi-agent system for 24/7 customer engagement across all channels. Specialized agents handle product questions, order status, returns processing, and proactive outreach. LangChain powers sentiment analysis and trend detection. TypeScript dashboard provides real-time insights to support team.',
    outcome:
      'Response time dropped 96% from 24 hours to 57 minutes average. Conversion rate from inquiries increased 42%. Customer satisfaction scores jumped from 67% to 88%. $380,000 additional annual revenue from recovered opportunities and improved retention.',
    tools: ['CrewAI', 'LangChain', 'TypeScript', 'React', 'Node.js'],
    heroMetrics: [
      {
        id: 'response-time',
        label: 'Faster Responses',
        value: 96,
        unit: '%',
        prefix: '+',
        trend: 'up',
        description: 'From 24 hours to 57 minutes'
      },
      {
        id: 'conversion',
        label: 'Conversion Increase',
        value: 42,
        unit: '%',
        prefix: '+',
        trend: 'up',
        description: 'More inquiries convert to sales'
      },
      {
        id: 'satisfaction',
        label: 'Customer Satisfaction',
        value: 88,
        unit: '%',
        prefix: '',
        trend: 'up',
        description: 'Up from 67% baseline'
      },
      {
        id: 'revenue',
        label: 'Additional Annual Revenue',
        value: 380000,
        unit: '$',
        prefix: '+',
        trend: 'up',
        description: 'Recovered opportunities + retention'
      }
    ],
    charts: [
      {
        id: 'response-time-weekly',
        type: 'line',
        title: 'Average Response Time by Week',
        description: 'Rapid improvement as AI agents learned product catalog',
        data: [
          { label: 'Week 1', value: 1320 },
          { label: 'Week 3', value: 480 },
          { label: 'Week 6', value: 180 },
          { label: 'Week 9', value: 85 },
          { label: 'Week 12', value: 57 },
        ],
        dataKey: 'value',
        xAxisKey: 'label'
      },
      {
        id: 'revenue-recovered',
        type: 'area',
        title: 'Cumulative Revenue from Faster Engagement',
        description: 'Revenue that would have been lost to slow responses',
        data: [
          { label: 'Month 1', value: 12000 },
          { label: 'Month 2', value: 38000 },
          { label: 'Month 3', value: 76000 },
          { label: 'Month 6', value: 185000 },
          { label: 'Month 12', value: 380000 }
        ],
        dataKey: 'value',
        xAxisKey: 'label'
      },
      {
        id: 'satisfaction-scores',
        type: 'bar',
        title: 'Customer Satisfaction Scores',
        data: [
          { label: 'Before AI', value: 67, category: 'before' },
          { label: 'After AI', value: 88, category: 'after' },
          { label: 'Industry Average', value: 73, category: 'benchmark' }
        ],
        dataKey: 'value',
        xAxisKey: 'label'
      }
    ],
    roi: {
      investment: 65000,
      annualSavings: 380000,
      paybackPeriod: '8 weeks'
    },
    testimonial: {
      quote: "Our customers get instant, accurate responses at any hour. The AI doesn't just answer questions - it proactively identifies and resolves issues before customers even complain.",
      author: "Jennifer Park",
      role: "Head of Customer Experience"
    }
  }
];

export default caseStudies;
