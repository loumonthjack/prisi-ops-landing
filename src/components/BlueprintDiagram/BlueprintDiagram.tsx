import { motion } from 'framer-motion';
import type { BlueprintDiagramProps, WorkflowNode, WorkflowConnection } from '../../types';

/**
 * BlueprintDiagram Component - Minimalist Edition
 *
 * Clean, elegant workflow diagram with simple lines and clear nodes.
 */
export function BlueprintDiagram({
  nodes,
  connections,
  onNodeClick,
  activeNodeId,
}: BlueprintDiagramProps) {
  // Calculate SVG viewBox based on node positions
  const padding = 60;
  const nodeWidth = 180;
  const nodeHeight = 60;

  const minX = Math.min(...nodes.map(n => n.position.x)) - padding;
  const minY = Math.min(...nodes.map(n => n.position.y)) - padding;
  const maxX = Math.max(...nodes.map(n => n.position.x)) + nodeWidth + padding;
  const maxY = Math.max(...nodes.map(n => n.position.y)) + nodeHeight + padding;

  const width = maxX - minX;
  const height = maxY - minY;

  // Get node by ID for connection calculations
  const getNodeById = (id: string): WorkflowNode | undefined =>
    nodes.find(n => n.id === id);

  // Calculate connection path between two nodes
  const getConnectionPath = (connection: WorkflowConnection): string => {
    const fromNode = getNodeById(connection.from);
    const toNode = getNodeById(connection.to);

    if (!fromNode || !toNode) return '';

    const fromX = fromNode.position.x + nodeWidth / 2;
    const fromY = fromNode.position.y + nodeHeight;
    const toX = toNode.position.x + nodeWidth / 2;
    const toY = toNode.position.y;

    // Create a curved path
    const midY = (fromY + toY) / 2;

    return `M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}`;
  };

  return (
    <div
      data-testid="blueprint-diagram"
      className="relative w-full overflow-hidden theme-transition border"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
    >
      <svg
        viewBox={`${minX} ${minY} ${width} ${height}`}
        className="w-full h-auto min-h-[300px] md:min-h-[400px]"
        style={{
          maxHeight: '600px',
          touchAction: 'pan-x pan-y pinch-zoom'
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connection lines */}
        <g>
          {connections.map((connection, index) => (
            <motion.path
              key={`connection-${index}`}
              d={getConnectionPath(connection)}
              fill="none"
              stroke="var(--border)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
          ))}
        </g>

        {/* Nodes */}
        <g>
          {nodes.map((node, index) => {
            const isActive = activeNodeId === node.id;
            return (
              <g key={node.id}>
                {/* Node rectangle */}
                <motion.rect
                  x={node.position.x}
                  y={node.position.y}
                  width={nodeWidth}
                  height={nodeHeight}
                  fill="var(--bg)"
                  stroke="var(--border)"
                  strokeWidth={isActive ? 2 : 1}
                  onClick={() => onNodeClick?.(node.id)}
                  style={{ cursor: onNodeClick ? 'pointer' : 'default' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={onNodeClick ? { scale: 1.05, strokeWidth: 2 } : {}}
                />

                {/* Node label */}
                <motion.text
                  x={node.position.x + nodeWidth / 2}
                  y={node.position.y + nodeHeight / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="var(--text)"
                  fontSize="14"
                  fontFamily="var(--font-body)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                >
                  {node.label}
                </motion.text>

                {/* Node type indicator */}
                <motion.text
                  x={node.position.x + nodeWidth / 2}
                  y={node.position.y + nodeHeight / 2 + 18}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="var(--text-muted)"
                  fontSize="10"
                  fontFamily="var(--font-mono)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  style={{ pointerEvents: 'none', userSelect: 'none', textTransform: 'uppercase' }}
                >
                  {node.type.replace('-', ' ')}
                </motion.text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 space-y-2">
        {activeNodeId && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-2 border theme-transition"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--border)'
            }}
          >
            <p
              className="font-mono text-caption"
              style={{ color: 'var(--text-secondary)' }}
            >
              {nodes.find(n => n.id === activeNodeId)?.label}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default BlueprintDiagram;
