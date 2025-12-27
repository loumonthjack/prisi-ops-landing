import { MetricCard } from '../MetricCard';
import type { Metric } from '../../types';

/**
 * MetricDashboard Component
 *
 * Responsive grid layout for displaying multiple metric cards
 * with staggered animations.
 */

interface MetricDashboardProps {
  metrics: Metric[];
}

export function MetricDashboard({ metrics }: MetricDashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard
          key={metric.id}
          metric={metric}
          animationDelay={index * 0.1}
        />
      ))}
    </div>
  );
}

export default MetricDashboard;
