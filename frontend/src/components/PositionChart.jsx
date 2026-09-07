import { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries, ColorType, LineStyle } from "lightweight-charts";
import { Loader2 } from "lucide-react";
import { api } from "../lib/api";

const RANGES = [
  { value: 1, label: "1D" },
  { value: 7, label: "7D" },
  { value: 30, label: "30D" },
  { value: 90, label: "90D" },
];

/**
 * Candlestick chart (own data, own rendering) so we can draw solid
 * horizontal price lines for a position's entry / take-profit / stop-loss /
 * liquidation price directly on the chart — something the free TradingView
 * iframe embed doesn't let us control from the outside.
 *
 * `lines` = [{ price, color, title, dashed }]
 */
export default function PositionChart({ coinId, lines = [], height = "100%" }) {
  const containerRef = useRef(null);
  const chartRef = useRef(null);
  const seriesRef = useRef(null);
  const priceLinesRef = useRef([]);
  const [range, setRange] = useState(1);
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);

  // Create the chart once.
  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "#0B0E14" },
        textColor: "#9aa0ac",
        fontSize: 11,
      },
      grid: {
        vertLines: { color: "rgba(255,255,255,0.04)" },
        horzLines: { color: "rgba(255,255,255,0.04)" },
      },
      timeScale: { timeVisible: true, secondsVisible: false, borderColor: "rgba(255,255,255,0.08)" },
      rightPriceScale: { borderColor: "rgba(255,255,255,0.08)" },
      crosshair: { mode: 0 },
      autoSize: true,
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor: "#C8F169",
      downColor: "#fb7185",
      borderVisible: false,
      wickUpColor: "#C8F169",
      wickDownColor: "#fb7185",
    });

    chartRef.current = chart;
    seriesRef.current = series;

    return () => {
      chart.remove();
      chartRef.current = null;
      seriesRef.current = null;
      priceLinesRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load candles whenever coin or range changes.
  useEffect(() => {
    if (!coinId || !seriesRef.current) return;
    let cancelled = false;
    setLoading(true);
    setErrored(false);

    api
      .get(`/market/ohlc/${coinId}`, { params: { days: range } })
      .then(({ data }) => {
        if (cancelled || !seriesRef.current) return;
        const candles = (data.data || []).map((c) => ({
          time: c.time,
          open: c.open,
          high: c.high,
          low: c.low,
          close: c.close,
        }));
        seriesRef.current.setData(candles);
        chartRef.current?.timeScale().fitContent();
      })
      .catch(() => {
        if (!cancelled) setErrored(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [coinId, range]);

  // Redraw price lines whenever they change.
  useEffect(() => {
    const series = seriesRef.current;
    if (!series) return;

    priceLinesRef.current.forEach((pl) => {
      try {
        series.removePriceLine(pl);
      } catch (e) {
        // series may already be gone during unmount race — safe to ignore
      }
    });
    priceLinesRef.current = [];

    lines
      .filter((l) => l && l.price != null && !isNaN(l.price))
      .forEach((l) => {
        const pl = series.createPriceLine({
          price: l.price,
          color: l.color || "#ffffff",
          lineWidth: 2,
          lineStyle: l.dashed ? LineStyle.Dashed : LineStyle.Solid,
          axisLabelVisible: true,
          title: l.title || "",
        });
        priceLinesRef.current.push(pl);
      });
  }, [lines]);

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="flex items-center gap-1 px-3 py-2 border-b border-white/5 shrink-0">
        {RANGES.map((r) => (
          <button
            key={r.value}
            type="button"
            onClick={() => setRange(r.value)}
            data-testid={`position-chart-range-${r.value}`}
            className={`text-[11px] font-mono px-2 py-1 rounded-md transition-colors ${
              range === r.value ? "bg-white/10 text-white" : "text-zinc-500 hover:text-white"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>
      <div className="relative flex-1 min-h-0" style={{ height }}>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0B0E14]/60 z-10">
            <Loader2 size={22} className="text-[#C8F169] animate-spin" />
          </div>
        )}
        {errored && !loading && (
          <div className="absolute inset-0 flex items-center justify-center z-10 px-6 text-center">
            <p className="text-sm text-zinc-500">Couldn't load candle data right now.</p>
          </div>
        )}
        <div ref={containerRef} className="w-full h-full" />
      </div>
    </div>
  );
}
