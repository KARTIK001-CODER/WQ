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
        value="4"
        icon={<BookOpen size={15} />}
        trend="+1 this month"
        trendDirection="up"
        delay={0.05}
      />
      <StatWidget
        label="XP Earned"
        value="1,280"
        icon={<Trophy size={15} />}
        trend="+240 today"
        trendDirection="up"
        delay={0.1}
      />
      <StatWidget
        label="Study Hours"
        value="47"
        icon={<ClockCounterClockwise size={15} />}
        trend="+3.2 this wk"
        trendDirection="up"
        delay={0.15}
      />
      <StatWidget
        label="Completion"
        value="68%"
        icon={<Target size={15} />}
        trend="avg. 72%"
        trendDirection="neutral"
        delay={0.2}
      />
    </div>
  );
}
