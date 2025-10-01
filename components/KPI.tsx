'use client';
import { formatCurrency } from './format';
export default function KPI({ label, value, trend, isPercent, suffix }: { label: string; value: number; trend?: number; isPercent?: boolean; suffix?: string; }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-gray-500 font-medium">{label}</h3>
      <p className="text-3xl font-bold text-gray-900 mt-1">{isPercent ? `${value.toFixed(1)}%` : formatCurrency(value)}</p>
      {typeof trend === 'number' ? (
        <p className={trend >= 0 ? 'text-green-600 text-sm mt-1' : 'text-red-600 text-sm mt-1'}>
          {trend >= 0 ? '+' : ''}{trend}% since last month
        </p>
      ) : suffix ? (
        <p className="text-gray-400 text-sm mt-1">{suffix}</p>
      ) : null}
    </div>
  );
}