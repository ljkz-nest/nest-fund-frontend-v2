export default function ProgressBar({ value }: { value: number }) {
  const pct = Math.round(value * 100);
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 relative" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} role="progressbar">
      <div className="bg-brand-600 h-2.5 rounded-full" style={{ width: `${pct}%` }} />
      <span className="absolute right-2 -top-5 text-xs font-semibold text-gray-700">{pct}% funded</span>
    </div>
  );
}