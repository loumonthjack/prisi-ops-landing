import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Metric } from '../../types';

/**
 * MetricCard Component
 *
 * Displays a single metric with animated counting and trend indicator.
 * Features minimalist design with large display typography.
 */

interface MetricCardProps {
  metric: Metric;
  animationDelay?: number;
}

export function MetricCard({ metric, animationDelay = 0 }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0);

  // Animated counter effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = metric.value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setDisplayValue(increment * currentStep);
      } else {
        setDisplayValue(metric.value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [metric.value]);

  // Format the displayed value
  const formatValue = (value: number): string => {
    if (metric.unit === '$') {
      return Math.round(value).toLocaleString();
    }
    if (metric.unit === '%' || metric.unit === 'hrs') {
      return value.toFixed(1);
    }
    if (metric.unit === 'x') {
      return value.toFixed(1);
    }
    return Math.round(value).toString();
  };

  // Trend arrow icon
  const TrendIcon = () => {
    if (!metric.trend) return null;

    const isUp = metric.trend === 'up';
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="inline-block ml-2"
      >
        <path
          d={isUp ? "M10 15V5M10 5L5 10M10 5L15 10" : "M10 5V15M10 15L15 10M10 15L5 10"}
          stroke={isUp ? 'var(--trend-positive)' : 'var(--trend-negative)'}
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className="minimal-card p-6"
    >
      <div className="space-y-3 min-w-0">
        {/* Metric Value */}
        <div className="flex items-start gap-2 min-w-0">
          <h3
            className="font-display text-heading-large md:text-display break-all min-w-0 flex-1"
            style={{ color: 'var(--text)' }}
          >
            {metric.prefix}
            {formatValue(displayValue)}
            {metric.unit === '$' ? '' : metric.unit}
          </h3>
          <TrendIcon />
        </div>

        {/* Metric Label */}
        <p
          className="font-mono text-caption"
          style={{ color: 'var(--text-muted)' }}
        >
          {metric.label}
        </p>

        {/* Metric Description */}
        {metric.description && (
          <p
            className="font-body text-small"
            style={{ color: 'var(--text-secondary)' }}
          >
            {metric.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default MetricCard;
