import React from "react";
import { revenueSeries, weeklyAttendance } from "@/data/finance";

export function RevenueChart() {
  const w = 720;
  const h = 260;
  const pad = 34;
  const max = 20000;
  const pts = revenueSeries.map((d, i) => {
    const x = pad + (i * (w - pad * 2)) / (revenueSeries.length - 1);
    const y = h - pad - (d.revenue / max) * (h - pad * 2);
    return { x, y, ...d };
  });
  const line = pts.map((p) => `${p.x},${p.y}`).join(" ");
  const area = `${pad},${h - pad} ${line} ${w - pad},${h - pad}`;
  const last = pts[pts.length - 1];

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        <defs>
          <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2EF2A0" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#2EF2A0" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <line
            key={f}
            x1={pad}
            x2={w - pad}
            y1={h - pad - f * (h - pad * 2)}
            y2={h - pad - f * (h - pad * 2)}
            stroke="rgba(255,255,255,0.07)"
            strokeDasharray="4 6"
          />
        ))}
        <polygon points={area} fill="url(#revFill)" />
        <polyline
          points={line}
          fill="none"
          stroke="#2EF2A0"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="chart-line"
        />
        {pts.map((p, i) =>
          i % 2 === 0 || i === pts.length - 1 ? (
            <g key={p.month}>
              <circle cx={p.x} cy={p.y} r="4" fill="#08090B" stroke="#2EF2A0" strokeWidth="2.5" />
              <text x={p.x} y={h - 8} textAnchor="middle" fontSize="11" fill="#98A29B" fontFamily="Inter, sans-serif">
                {p.month}
              </text>
            </g>
          ) : null
        )}
        <g>
          <rect x={last.x - 88} y={last.y - 42} width="86" height="28" rx="8" fill="#2EF2A0" />
          <text x={last.x - 45} y={last.y - 23} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#08090B" fontFamily="Inter, sans-serif">
            $18,640
          </text>
        </g>
      </svg>
    </div>
  );
}

export function WeeklyBars() {
  const max = Math.max(...weeklyAttendance.map((d) => d.checkins));
  return (
    <div className="flex h-36 items-end gap-3">
      {weeklyAttendance.map((d, i) => (
        <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
          <span className="font-mono text-[11px] text-muted">{d.checkins}</span>
          <div
            className={`bar-grow w-full rounded-t-md ${d.checkins === max ? "bg-volt shadow-glow" : "bg-raise"}`}
            style={{ height: `${(d.checkins / max) * 96}px`, animationDelay: `${i * 70}ms` }}
          />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-faint">{d.day}</span>
        </div>
      ))}
    </div>
  );
}

export function ProgressRing({ value, size = 64, stroke = 6 }: { value: number; size?: number; stroke?: number }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="#2EF2A0"
        strokeWidth={stroke}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c - (value / 100) * c}
      />
    </svg>
  );
}
