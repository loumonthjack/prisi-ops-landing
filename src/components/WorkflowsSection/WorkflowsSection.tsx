import { useState } from 'react';
import { motion } from 'framer-motion';
import { BlueprintDiagram } from '../BlueprintDiagram';
import type { AgentWorkflow } from '../../types';

/**
 * WorkflowsSection Component - Minimalist Edition
 *
 * Clean presentation of AI workflows with elegant diagrams.
 */
export interface WorkflowsSectionProps {
  workflows: AgentWorkflow[];
}

export function WorkflowsSection({ workflows }: WorkflowsSectionProps) {
  const [activeNodeId, setActiveNodeId] = useState<string | undefined>(undefined);
  const [expandedWorkflowId, setExpandedWorkflowId] = useState<string | null>(
    workflows.length > 0 ? workflows[0].id : null
  );

  const handleNodeClick = (nodeId: string) => {
    setActiveNodeId(activeNodeId === nodeId ? undefined : nodeId);
  };

  const handleWorkflowToggle = (workflowId: string) => {
    setExpandedWorkflowId(expandedWorkflowId === workflowId ? null : workflowId);
    setActiveNodeId(undefined);
  };

  return (
    <section
      data-testid="services-section"
      className="w-full h-full flex items-center justify-center px-6 md:px-12"
    >
      <br/>
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
          className="font-display text-heading-large metallic-text tracking-wide mb-8"
        >
        Workflows
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-base md:text-lg mb-14 max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          AI agent workflows designed for efficiency and clarity
        </motion.p>
        <br/>

      {/* Workflows */}
      <div className="space-y-generous">
        {workflows.map((workflow, index) => (
          <motion.div
            key={workflow.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="minimal-card"
          >
            <button
              onClick={() => handleWorkflowToggle(workflow.id)}
              className="w-full flex items-center justify-between text-left mb-6"
            >
              <div>
                <h3
                  className="font-display text-heading mb-2"
                  style={{ color: 'var(--text)' }}
                >
                  {workflow.title}
                </h3>
                <p
                  className="font-body text-body"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {workflow.description}
                </p>
              </div>
              <motion.div
                animate={{ rotate: expandedWorkflowId === workflow.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ color: 'var(--text-secondary)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </button>

            {expandedWorkflowId === workflow.id && (
              <BlueprintDiagram
                nodes={workflow.nodes}
                connections={workflow.connections}
                activeNodeId={activeNodeId}
                onNodeClick={handleNodeClick}
              />
            )}
          </motion.div>
        ))}
      </div>
      </motion.div>
    </section>
  );
}

export default WorkflowsSection;
