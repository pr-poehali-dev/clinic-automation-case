import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t: number | null = null;
    const run = (ts: number) => {
      if (!t) t = ts;
      const p = Math.min((ts - t) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(e * target));
      if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }, [target, duration, start]);
  return count;
}

export function AnimNum({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView(0.3);
  const count = useCountUp(value, 1600, inView);
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {count.toLocaleString("ru-RU")}{suffix}
    </span>
  );
}

export const FinanceTable = ({
  title,
  badge,
  badgeColor,
  revenue,
  rows,
  totalExpenses,
  profit,
  margin,
  note,
}: {
  title: string;
  badge: string;
  badgeColor: string;
  revenue: string;
  rows: [string, string][];
  totalExpenses: string;
  profit: string;
  margin: string;
  note?: string;
}) => {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className="fin-table-wrap"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.7s ease",
      }}
    >
      <div className="fin-table-header">
        <span className={`fin-badge ${badgeColor}`}>{badge}</span>
        <h3>{title}</h3>
        <div className="fin-revenue">Выручка: <strong>{revenue}</strong></div>
      </div>
      <table className="fin-table">
        <tbody>
          {rows.map(([label, val], i) => (
            <tr key={i}>
              <td>{label}</td>
              <td>{val}</td>
            </tr>
          ))}
          <tr className="fin-total">
            <td>Итого расходы</td>
            <td>{totalExpenses}</td>
          </tr>
        </tbody>
      </table>
      <div className="fin-profit">
        <div>
          <span>Чистая прибыль</span>
          <strong>{profit}</strong>
        </div>
        <div>
          <span>Маржа</span>
          <strong>{margin}</strong>
        </div>
      </div>
      {note && <div className="fin-note">{note}</div>}
    </div>
  );
};
