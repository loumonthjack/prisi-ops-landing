// Vault State Types
export interface VaultState {
  isUnlocked: boolean;
  hasEntered: boolean;
  currentSection: number;
  unlockedSections: number[];
}

export type NavigationAction =
  | { type: 'UNLOCK' }
  | { type: 'ENTER' }
  | { type: 'NAVIGATE'; payload: number }
  | { type: 'UNLOCK_SECTION'; payload: number };

// Component Props Types
export interface ProfileLockProps {
  imageSrc: string;
  isHovered: boolean;
  onClick: () => void;
  tooltipText: string;
}

export interface VaultDoorProps {
  isUnlocking: boolean;
  onUnlock: () => void;
}

export interface VaultInteriorProps {
  currentSection: number;
  onNavigate: (section: number) => void;
}

export interface VaultPanelProps {
  title: string;
  isOpen: boolean;
  onOpen: () => void;
  children: React.ReactNode;
  panelStyle?: 'drawer' | 'door' | 'deposit-box';
}

export interface SecurityLevelIndicatorProps {
  totalLevels: number;
  currentLevel: number;
  levelLabels?: string[];
}

// Workflow Types
export interface WorkflowNode {
  id: string;
  label: string;
  type: 'input' | 'process' | 'output' | 'ai-agent';
  position: { x: number; y: number };
}

export interface WorkflowConnection {
  from: string;
  to: string;
  animated?: boolean;
}

export interface BlueprintDiagramProps {
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
  onNodeClick?: (nodeId: string) => void;
  activeNodeId?: string;
}

// Metrics Types
export interface Metric {
  id: string;
  label: string;
  value: number;
  unit: string; // '%', '$', 'hrs', 'x', 'min'
  prefix?: string; // '+', '-', '~'
  trend?: 'up' | 'down';
  description?: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  category?: string;
}

export interface MetricChart {
  id: string;
  type: 'bar' | 'line' | 'area';
  title: string;
  description?: string;
  data: ChartDataPoint[];
  dataKey: string;
  xAxisKey?: string;
}

// Content Types
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  problem: string;
  solution: string;
  outcome: string;
  tools: string[];
  heroMetrics: Metric[];
  charts: MetricChart[];
  roi: {
    investment: number;
    annualSavings: number;
    paybackPeriod: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  isExpanded: boolean;
  onToggle: () => void;
}

export interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export interface AgentWorkflow {
  id: string;
  title: string;
  description: string;
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  calendly?: string;
}

export interface PortfolioContent {
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
  caseStudies: CaseStudy[];
  workflows: AgentWorkflow[];
  contact: ContactInfo;
}
