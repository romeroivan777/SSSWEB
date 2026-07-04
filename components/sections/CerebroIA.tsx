"use client";

/**
 * El Cerebro IA: la única pieza "ilustrativa" del sitio, y es deliberadamente
 * no-ilustrativa — son líneas vectoriales de 1px (grafo estilo n8n) y un glow
 * radial, nunca un dibujo de stock. Transmite "el sistema siempre está operando".
 * Puramente CSS/SVG, sin JS de runtime: cero costo de hidratación.
 */
export function CerebroIA() {
  const n0 = { x: 60, y: 80 };
  const n1 = { x: 220, y: 40 };
  const n2 = { x: 340, y: 120 };
  const n3 = { x: 200, y: 200 };
  const n4 = { x: 80, y: 220 };
  const n5 = { x: 300, y: 260 };

  const nodes = [
    { point: n0, central: false },
    { point: n1, central: true },
    { point: n2, central: false },
    { point: n3, central: false },
    { point: n4, central: false },
    { point: n5, central: false },
  ];

  const edges: [{ x: number; y: number }, { x: number; y: number }][] = [
    [n0, n1],
    [n1, n2],
    [n1, n3],
    [n3, n4],
    [n3, n5],
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute h-[420px] w-[420px] rounded-full bg-accent-tech/10 blur-3xl" />
      <svg
        viewBox="0 0 400 300"
        className="relative h-auto w-[520px] max-w-full opacity-40 md:opacity-60"
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="white"
            strokeOpacity={0.15}
            strokeWidth={1}
            strokeDasharray="4 4"
            className="animate-[dash_6s_linear_infinite]"
          />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.point.x}
            cy={n.point.y}
            r={n.central ? 5 : 3}
            fill={n.central ? "#0057FF" : "white"}
            fillOpacity={n.central ? 0.9 : 0.5}
          >
            {n.central && (
              <animate attributeName="r" values="5;7;5" dur="2.4s" repeatCount="indefinite" />
            )}
          </circle>
        ))}
      </svg>
    </div>
  );
}
