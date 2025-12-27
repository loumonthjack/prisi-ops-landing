import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { chartTheme } from '../../styles/chartTheme';
import type { MetricChart as MetricChartType } from '../../types';

/**
 * MetricChart Component
 *
 * Wrapper for Recharts with consistent theming and styling.
 * Supports bar, line, and area chart types.
 */

interface MetricChartProps {
  chart: MetricChartType;
}

export function MetricChart({ chart }: MetricChartProps) {
  // Custom tooltip styling
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="p-3 border"
          style={{
            backgroundColor: 'var(--surface)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
            fontFamily: chartTheme.fonts.body,
          }}
        >
          <p className="font-mono text-caption" style={{ color: 'var(--text-muted)' }}>
            {payload[0].payload.label}
          </p>
          <p className="font-body text-body" style={{ color: 'var(--text)' }}>
            {payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  // Common axis styling
  const axisStyle = {
    fontFamily: chartTheme.fonts.mono,
    fontSize: chartTheme.sizes.labelFontSize,
    fill: 'var(--text-muted)',
  };

  return (
    <div className="minimal-card p-6">
      <div className="mb-6">
        <h3
          className="font-display text-heading mb-2"
          style={{ color: 'var(--text)' }}
        >
          {chart.title}
        </h3>
        {chart.description && (
          <p
            className="font-body text-caption"
            style={{ color: 'var(--text-secondary)' }}
          >
            {chart.description}
          </p>
        )}
      </div>

      {chart.type === 'bar' && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chart.data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
              opacity={0.3}
            />
            <XAxis
              dataKey={chart.xAxisKey || 'label'}
              stroke="var(--text-muted)"
              style={axisStyle}
            />
            <YAxis
              stroke="var(--text-muted)"
              style={axisStyle}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey={chart.dataKey}
              fill="var(--text)"
              radius={[0, 0, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}

      {chart.type === 'line' && (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chart.data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
              opacity={0.3}
            />
            <XAxis
              dataKey={chart.xAxisKey || 'label'}
              stroke="var(--text-muted)"
              style={axisStyle}
            />
            <YAxis
              stroke="var(--text-muted)"
              style={axisStyle}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey={chart.dataKey}
              stroke="var(--text)"
              strokeWidth={2}
              dot={{ fill: 'var(--text)', strokeWidth: 0, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}

      {chart.type === 'area' && (
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chart.data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
              opacity={0.3}
            />
            <XAxis
              dataKey={chart.xAxisKey || 'label'}
              stroke="var(--text-muted)"
              style={axisStyle}
            />
            <YAxis
              stroke="var(--text-muted)"
              style={axisStyle}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey={chart.dataKey}
              stroke="var(--text)"
              fill="var(--text)"
              fillOpacity={0.1}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default MetricChart;
