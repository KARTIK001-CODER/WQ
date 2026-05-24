"use client";

import { motion } from "framer-motion";

const weeklyData = [
  { day: "Mon", hours: 1.5 },
  { day: "Tue", hours: 2.8 },
  { day: "Wed", hours: 1.2 },
  { day: "Thu", hours: 3.1 },
  { day: "Fri", hours: 2.4 },
  { day: "Sat", hours: 0.8 },
  { day: "Sun", hours: 0.4 },
];

const maxHours = Math.max(...weeklyData.map((d) => d.hours));

export function AnalyticsPreview() {
  return (
    <div>
      <div className="flex items-end gap-3 h-24">
        {weeklyData.map((d, i) => {
          const heightPct = (d.hours / maxHours) * 100;
          const isToday = i === 4; // Friday
          return (
            <div
              key={d.day}
              className="flex-1 flex flex-col items-center gap-1.5 group"
            >
              <div
                className="w-full flex flex-col justify-end rounded-t-sm overflow-hidden"
                style={{ height: "80px" }}
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${heightPct}%` }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.05,
                  }}
                  className="w-full rounded-t-sm"
                  style={{
                    backgroundColor: isToday
                      ? "#C1622F"
                      : "rgba(30, 30, 28, 0.10)",
                  }}
                />
              </div>
              <span
                className="text-[9px] font-semibold tracking-wider uppercase"
                style={{
                  color: isToday ? "#C1622F" : "#A8A8A5",
                }}
              >
                {d.day}
              </span>
            </div>
          );
        })}
      </div>
      <div
        className="mt-4 flex items-center justify-between pt-3"
        style={{ borderTop: "1px solid rgba(30,30,28,0.08)" }}
      >
        <p className="text-xs" style={{ color: "#6B6B68" }}>
          <span className="font-semibold text-ink">12.2 hrs</span> this week
        </p>
        <p className="text-xs" style={{ color: "#A8A8A5" }}>
          +18% vs last week
        </p>
      </div>
    </div>
  );
}
