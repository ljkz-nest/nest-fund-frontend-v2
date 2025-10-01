'use client';
import ChartCard from '@/components/ChartCard';
import KPI from '@/components/KPI';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-6 py-8 space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPI label="Portfolio Value" value={12450.75} trend={2.5} />
        <KPI label="Total Invested" value={10000} suffix=" across 5 properties" />
        <KPI label="Estimated Annual Return" value={9.8} isPercent />
        <KPI label="Lifetime Earnings" value={2450.75} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard kind="line" title="Portfolio Performance" />
        <ChartCard kind="doughnut" title="Portfolio Allocation" />
      </div>
    </div>
  );
}