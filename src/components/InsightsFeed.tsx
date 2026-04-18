"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INSIGHTS = [
  {
    id: 1,
    emoji: "🥭",
    product: "Mango",
    tag: "Top seller",
    tagColor: "#ef9f38",
    message: "Producto más vendido esta semana. Considera aumentar el pedido.",
    time: "Ahora",
  },
  {
    id: 2,
    emoji: "⚠️",
    product: "Arroz Premium",
    tag: "Stock bajo",
    tagColor: "#f87171",
    message: "Solo quedan 8 unidades. Reorden recomendado antes del jueves.",
    time: "Hace 2 min",
  },
  {
    id: 3,
    emoji: "📈",
    product: "Leche Entera",
    tag: "Tendencia",
    tagColor: "#64b8c0",
    message: "Ventas subieron 34% vs semana pasada. Demanda en aumento.",
    time: "Hace 5 min",
  },
  {
    id: 4,
    emoji: "📦",
    product: "Aceite de Oliva",
    tag: "Reorden",
    tagColor: "#a78bfa",
    message: "Punto de reorden alcanzado. 3 unidades en camino.",
    time: "Hace 8 min",
  },
];

function TypewriterText({ text, onDone }: { text: string; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const doneRef = useRef(false);

  useEffect(() => {
    setDisplayed("");
    doneRef.current = false;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        if (!doneRef.current) {
          doneRef.current = true;
          onDone?.();
        }
      }
    }, 28);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[12px] bg-[#64b8c0] align-middle ml-[1px] animate-pulse" />
      )}
    </span>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-[#64b8c0]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

export default function InsightsFeed() {
  const MAX_VISIBLE = 3;
  const [queue, setQueue] = useState([INSIGHTS[0]]);
  const [nextIndex, setNextIndex] = useState(1);
  const [typing, setTyping] = useState(false);
  const [typingKey, setTypingKey] = useState<number | null>(null);

  useEffect(() => {
    const schedule = () => {
      const timer = setTimeout(() => {
        const next = INSIGHTS[nextIndex % INSIGHTS.length];
        setTyping(true);
        setTypingKey(next.id);

        setTimeout(() => {
          setTyping(false);
          setQueue((prev) => {
            const updated = [next, ...prev];
            return updated.slice(0, MAX_VISIBLE);
          });
          setNextIndex((n) => n + 1);
        }, 1400);
      }, 2800);
      return timer;
    };

    const t = schedule();
    return () => clearTimeout(t);
  }, [nextIndex]);

  return (
    <div className="rounded-2xl bg-[#162B52] p-5 shadow-xl w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64b8c0] opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#64b8c0]" />
          </span>
          <span className="text-xs font-semibold text-neutral-300">Clearpath Insights</span>
        </div>
        <span className="text-[10px] font-medium text-[#64b8c0] uppercase tracking-wider">Live</span>
      </div>

      {/* Feed */}
      <div className="flex flex-col gap-2 min-h-[220px]">
        <AnimatePresence initial={false}>
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-xl bg-[#0F2044] border border-white/10"
            >
              <TypingDots />
            </motion.div>
          )}

          {queue.map((insight, i) => (
            <motion.div
              key={insight.id}
              layout
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: i === 0 ? 1 : 0.6 - i * 0.1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-xl bg-[#0F2044] border border-white/10 px-4 py-3"
            >
              <div className="flex items-start gap-3">
                <span className="text-xl leading-none mt-0.5 flex-shrink-0">{insight.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-white">{insight.product}</span>
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
                        style={{ backgroundColor: insight.tagColor + "33", color: insight.tagColor }}
                      >
                        {insight.tag}
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-500 flex-shrink-0">{insight.time}</span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                    {i === 0 && insight.id === queue[0]?.id ? (
                      <TypewriterText key={insight.id} text={insight.message} />
                    ) : (
                      insight.message
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
