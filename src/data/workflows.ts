import type { AgentWorkflow } from '../types';

/**
 * Sample AI agent workflows showcasing automation pipelines
 * using various tools: Golang, TypeScript, n8n, LangChain, CrewAI
 * 
 * Requirements: 4.1, 4.2
 */
export const workflows: AgentWorkflow[] = [
  {
    id: 'customer-support-pipeline',
    title: 'AI Customer Support Pipeline',
    description:
      'An intelligent customer support system that automatically triages incoming requests, routes them to specialized AI agents, and escalates complex issues to human operators. The pipeline handles email, chat, and form submissions with consistent quality.',
    nodes: [
      {
        id: 'input-channels',
        label: 'Input Channels',
        type: 'input',
        position: { x: 50, y: 20 },
      },
      {
        id: 'triage-agent',
        label: 'Triage Agent',
        type: 'ai-agent',
        position: { x: 50, y: 100 },
      },
      {
        id: 'faq-agent',
        label: 'FAQ Agent',
        type: 'ai-agent',
        position: { x: 0, y: 180 },
      },
      {
        id: 'technical-agent',
        label: 'Tech Support',
        type: 'ai-agent',
        position: { x: 160, y: 180 },
      },
      {
        id: 'response-gen',
        label: 'Response Gen',
        type: 'process',
        position: { x: 80, y: 260 },
      },
      {
        id: 'human-escalation',
        label: 'Human Review',
        type: 'output',
        position: { x: 200, y: 260 },
      },
      {
        id: 'customer-response',
        label: 'Send Response',
        type: 'output',
        position: { x: 80, y: 340 },
      },
    ],
    connections: [
      { from: 'input-channels', to: 'triage-agent', animated: true },
      { from: 'triage-agent', to: 'faq-agent', animated: false },
      { from: 'triage-agent', to: 'technical-agent', animated: false },
      { from: 'triage-agent', to: 'human-escalation', animated: false },
      { from: 'faq-agent', to: 'response-gen', animated: true },
      { from: 'technical-agent', to: 'response-gen', animated: true },
      { from: 'response-gen', to: 'customer-response', animated: true },
    ],
  },
  {
    id: 'content-generation-workflow',
    title: 'Content Generation Workflow',
    description:
      'A multi-agent content creation system that researches topics, generates drafts, reviews for quality and SEO optimization, and publishes to multiple platforms. Ideal for businesses needing consistent content output.',
    nodes: [
      {
        id: 'topic-input',
        label: 'Topic Brief',
        type: 'input',
        position: { x: 100, y: 20 },
      },
      {
        id: 'research-agent',
        label: 'Research Agent',
        type: 'ai-agent',
        position: { x: 100, y: 100 },
      },
      {
        id: 'writer-agent',
        label: 'Writer Agent',
        type: 'ai-agent',
        position: { x: 100, y: 180 },
      },
      {
        id: 'seo-optimizer',
        label: 'SEO Optimizer',
        type: 'process',
        position: { x: 0, y: 260 },
      },
      {
        id: 'editor-agent',
        label: 'Editor Agent',
        type: 'ai-agent',
        position: { x: 200, y: 260 },
      },
      {
        id: 'publish-process',
        label: 'Multi-Platform',
        type: 'process',
        position: { x: 100, y: 340 },
      },
      {
        id: 'analytics-output',
        label: 'Analytics',
        type: 'output',
        position: { x: 100, y: 420 },
      },
    ],
    connections: [
      { from: 'topic-input', to: 'research-agent', animated: true },
      { from: 'research-agent', to: 'writer-agent', animated: true },
      { from: 'writer-agent', to: 'seo-optimizer', animated: false },
      { from: 'writer-agent', to: 'editor-agent', animated: false },
      { from: 'seo-optimizer', to: 'publish-process', animated: true },
      { from: 'editor-agent', to: 'publish-process', animated: true },
      { from: 'publish-process', to: 'analytics-output', animated: true },
    ],
  },
  {
    id: 'lead-qualification-system',
    title: 'Lead Qualification System',
    description:
      'An automated lead processing pipeline that captures leads from multiple sources, enriches data, scores prospects, and routes qualified leads to sales teams while nurturing others through automated sequences.',
    nodes: [
      {
        id: 'lead-sources',
        label: 'Lead Sources',
        type: 'input',
        position: { x: 100, y: 20 },
      },
      {
        id: 'data-enrichment',
        label: 'Data Enrichment',
        type: 'process',
        position: { x: 100, y: 100 },
      },
      {
        id: 'scoring-agent',
        label: 'Scoring Agent',
        type: 'ai-agent',
        position: { x: 100, y: 180 },
      },
      {
        id: 'hot-leads',
        label: 'Hot Leads',
        type: 'output',
        position: { x: 0, y: 260 },
      },
      {
        id: 'nurture-agent',
        label: 'Nurture Agent',
        type: 'ai-agent',
        position: { x: 200, y: 260 },
      },
      {
        id: 'crm-sync',
        label: 'CRM Sync',
        type: 'process',
        position: { x: 0, y: 340 },
      },
      {
        id: 'email-sequences',
        label: 'Email Sequences',
        type: 'output',
        position: { x: 200, y: 340 },
      },
    ],
    connections: [
      { from: 'lead-sources', to: 'data-enrichment', animated: true },
      { from: 'data-enrichment', to: 'scoring-agent', animated: true },
      { from: 'scoring-agent', to: 'hot-leads', animated: false },
      { from: 'scoring-agent', to: 'nurture-agent', animated: false },
      { from: 'hot-leads', to: 'crm-sync', animated: true },
      { from: 'nurture-agent', to: 'email-sequences', animated: true },
    ],
  },
];

export default workflows;
