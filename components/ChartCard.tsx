
'use client';
import { useEffect, useRef } from 'react';
import {
  Chart,
  LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler,
  ArcElement, DoughnutController, Legend, Tooltip
} from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler, ArcElement, DoughnutController, Legend, Tooltip);

export default function ChartCard({ kind, title }: { kind: 'line' | 'doughnut'; title: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }

      if (kind === 'line') {
        chartRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'],
            datasets: [{
              label: 'Portfolio Value',
              data: [10100,10300,10550,10800,11200,11500,11850,12200,12450],
              borderColor: 'rgb(13,148,136)',
              backgroundColor: 'rgba(13,148,136,.1)',
              tension: .4,
              fill: true
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: false, ticks: { callback: (v) => `$${Number(v).toLocaleString()}` } } }
          }
        });
      } else {
        chartRef.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Mongolia','Vietnam','Colombia','Philippines','Egypt'],
            datasets: [{
              label: 'Allocation',
              data: [2500,3000,1500,2000,1000],
              backgroundColor: ['#14B8A6','#0D9488','#0F766E','#047857','#10B981']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } }
          }
        });
      }
    });

    return () => {
      cancelAnimationFrame(id);
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [kind]);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <div className="relative h-72"> {/* fixed height to make chart visible */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-label={title} role="img" />
      </div>
    </div>
  );
}
