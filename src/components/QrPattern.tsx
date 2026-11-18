import React from "react";

/** Deterministic QR-looking SVG pattern generated from a seed string. Purely decorative demo visual. */
export default function QrPattern({
  seed,
  size = 21,
  className = "",
  fg = "#0B0D0F",
  bg = "#FFFFFF",
}: {
  seed: string;
  size?: number;
  className?: string;
  fg?: string;
  bg?: string;
}) {
  // simple stable hash -> pseudo random cells
  let h = 2166136261;
  const cells: boolean[] = [];
  for (let i = 0; i < size * size; i++) {
    const ch = seed.charCodeAt(i % seed.length) || 0;
    h ^= ch + i * 31;
    h = Math.imul(h, 16777619);
    cells.push(((h >>> 9) & 7) < 4);
  }
  const finder = (x: number, y: number) => {
    const inTL = x < 7 && y < 7;
    const inTR = x >= size - 7 && y < 7;
    const inBL = x < 7 && y >= size - 7;
    return inTL || inTR || inBL;
  };
  const finderOn = (x: number, y: number) => {
    const lx = x >= size - 7 ? x - (size - 7) : x;
    const ly = y >= size - 7 ? y - (size - 7) : y;
    if (lx === 0 || lx === 6 || ly === 0 || ly === 6) return true;
    if (lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4) return true;
    return false;
  };

  const rects: React.ReactNode[] = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const on = finder(x, y) ? finderOn(x, y) : cells[y * size + x];
      if (on) {
        rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={1.02} height={1.02} fill={fg} />);
      }
    }
  }

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className} role="img" aria-label="Member QR code">
      <rect width={size} height={size} fill={bg} />
      {rects}
    </svg>
  );
}
