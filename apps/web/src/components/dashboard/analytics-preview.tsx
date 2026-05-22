"use client";

import { StatWidget } from "./stat-widget";
import {
  BookOpen,
  Trophy,
  ClockCounterClockwise,
  Target,
} from "@phosphor-icons/react";

export function AnalyticsPreview() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <StatWidget
        label="Courses"
        value={4}
        icon={<BookOpen size={13} />}
        trend="+1 this month"
        trendDirection="up"
        delay={0.05}
        animate
      />
      <StatWidget
        label="XP Earned"
        value={1280}
        icon={<Trophy size={13} />}
        trend="+240 today"
        trendDirection="up"
        delay={0.1}
        animate
      />
      <StatWidget
        label="Study Hours"
        value={47}
        icon={<ClockCounterClockwise size={13} />}
        trend="+3.2 this wk"
        trendDirection="up"
        delay={0.15}
        animate
      />
      <StatWidget
        label="Completion"
        value="68%"
        icon={<Target size={13} />}
        trend="avg. 72%"
        trendDirection="neutral"
        delay={0.2}
      />
    </div>
  );
}
