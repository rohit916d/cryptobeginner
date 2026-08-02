export default function Sparkline({ data, width = 100, height = 32 }) {
  if (!data || data.length < 2) {
    return <div style={{ width, height }} className="text-zinc-700 text-xs flex items-center justify-center">—</div>;
  }

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data
    .map((val, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((val - min) / range) * height;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  const up = data[data.length - 1] >= data[0];
  const color = up ? "#34d399" : "#fb7185";

  const areaPoints = `0,${height} ${points} ${width},${height}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="overflow-visible"
      aria-hidden="true"
    >
      <polygon points={areaPoints} fill={color} opacity="0.08" />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
