"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/cn";
import GlazedButton from "@/components/landing/ui/glazed-button";
import { Sparkle, Star } from "@phosphor-icons/react";

const AetheraScene = dynamic(
  () => import("@/components/landing/aethera-scene"),
  { ssr: false }
);

const avatarColors = [
  "bg-verdant",
  "bg-sea-foam",
  "bg-sunlight",
  "bg-fresh-sprout",
];
const avatarInitials = ["A", "S", "M", "R"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Rich layered background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_#E8F5EE_0%,_#F6FAF8_60%,_#F6FAF8_100%)]" />
      {/* Verdant orb — top left */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(61,140,111,0.15)_0%,transparent_70%)]" />
      {/* Sea foam orb — bottom right */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(107,181,161,0.12)_0%,transparent_70%)]" />
      {/* Sunlight orb — center */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(242,201,76,0.06)_0%,transparent_70%)]" />
      {/* Decorative dots grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle,#1E2D26_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="flex min-h-screen flex-col items-center justify-center gap-12 py-28 lg:flex-row lg:items-center lg:gap-16 lg:py-32">

          {/* ── Left column ────────────────────────────────────── */}
          <div className="flex flex-1 flex-col items-start lg:max-w-[55%]">

            {/* Overline badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-sunlight/30 bg-white/60 px-4 py-2 shadow-sm backdrop-blur-sm">
              <Sparkle weight="fill" className="h-3.5 w-3.5 text-sunlight" />
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-deep-moss">
                Learn, Refreshed.
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-heading text-5xl leading-[1.1] tracking-tight text-deep-moss sm:text-6xl lg:text-7xl xl:text-[80px]">
              Where Knowledge
              <br />
              <span className="bg-gradient-to-r from-verdant to-sea-foam bg-clip-text text-transparent">
                Falls Like Morning Dew.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-muted-pine sm:text-xl">
              A serene, AI-powered learning sanctuary where every lesson feels
              like a deep breath of crisp morning air — gentle, refreshing, and
              life-giving.
            </p>

            {/* CTA row */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <GlazedButton href="/register" variant="verdant" size="lg">
                Get Started Free
              </GlazedButton>
              <a
                href="#features"
                className="group inline-flex items-center gap-2 font-sans text-lg font-medium text-sea-foam transition-colors duration-200 hover:text-verdant"
              >
                Explore Courses
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-14 inline-flex items-center gap-5 rounded-2xl border border-mist-border/60 bg-white/50 px-5 py-4 shadow-sm backdrop-blur-md">
              {/* Avatars */}
              <div className="flex -space-x-3">
                {avatarColors.map((color, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full",
                      "border-2 border-morning-mist text-xs font-bold text-white shadow-sm",
                      color
                    )}
                    style={{ zIndex: avatarColors.length - i }}
                  >
                    {avatarInitials[i]}
                  </div>
                ))}
              </div>
              <div className="border-l border-muted-pine/20 pl-5">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} weight="fill" className="h-3.5 w-3.5 text-sunlight" />
                  ))}
                </div>
                <p className="mt-0.5 font-sans text-sm text-muted-pine">
                  <span className="font-bold text-deep-moss">4.9/5</span> from{" "}
                  <span className="font-bold text-deep-moss">10,000+</span> learners
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { value: "500+", label: "Courses" },
                { value: "98%", label: "Completion rate" },
                { value: "150+", label: "Expert instructors" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-heading text-2xl font-semibold text-deep-moss">{value}</p>
                  <p className="mt-0.5 font-sans text-sm text-muted-pine">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — Botanical animation ─────────────── */}
          <div className="relative hidden h-[560px] w-full flex-1 lg:block lg:max-w-[45%]">
            {/* Outer ambient glow */}
            <div className="absolute -inset-8 rounded-[3.5rem] bg-gradient-to-tr from-verdant/12 via-sunlight/6 to-sea-foam/10 blur-sm" />
            {/* Glass card frame */}
            <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/35 shadow-[0_32px_64px_-16px_rgba(61,140,111,0.15),inset_0_2px_0_rgba(255,255,255,0.9)] backdrop-blur-lg">
              {/* Top accent line */}
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-verdant/50 to-transparent" />
              <AetheraScene />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-morning-mist to-transparent" />
    </section>
  );
}
