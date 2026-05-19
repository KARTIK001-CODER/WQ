import { Brain, Timer, UsersThree } from "@phosphor-icons/react/dist/ssr";
import CeramicCard from "@/components/landing/ui/ceramic-card";

const features = [
  {
    title: "AI That Nurtures",
    description:
      "Our AI tutor adapts to your pace, crafting personalized paths, live summaries, and gap-detection so every minute you study counts.",
    Icon: Brain,
    glow: "verdant" as const,
    iconBg: "bg-verdant/10 border-verdant/20",
    iconColor: "text-verdant",
    accent: "text-verdant",
  },
  {
    title: "Deep Work Sanctuary",
    description:
      "Built-in focus timers, curated ambient soundscapes, and a distraction-free interface designed to cultivate your deepest concentration.",
    Icon: Timer,
    glow: "sunlight" as const,
    iconBg: "bg-sunlight/10 border-sunlight/20",
    iconColor: "text-sunlight",
    accent: "text-sunlight",
  },
  {
    title: "Learn Together",
    description:
      "Live sessions, discussion gardens, and peer-led group projects that make growth feel genuinely connected and human.",
    Icon: UsersThree,
    glow: "seafoam" as const,
    iconBg: "bg-sea-foam/10 border-sea-foam/20",
    iconColor: "text-sea-foam",
    accent: "text-sea-foam",
  },
];

export default function FeatureCanopy() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-morning-mist py-28 lg:py-36"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(107,181,161,0.10)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(61,140,111,0.06)_0%,transparent_70%)]" />

      {/* Top divider */}
      <div className="mx-auto mb-24 h-px max-w-7xl bg-gradient-to-r from-transparent via-muted-pine/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="mb-20 text-center">
          <span className="mb-5 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-verdant">
            What Grows Here
          </span>
          <h2 className="font-heading text-4xl tracking-tight text-deep-moss sm:text-5xl lg:text-6xl">
            Everything You Need to{" "}
            <em className="font-light not-italic text-verdant">Flourish</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-pine">
            Three core pillars that transform learning from a daily chore into a
            deeply natural, organic process.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <CeramicCard key={feature.title} glowColor={feature.glow} className="p-8 lg:p-10">
              {/* Icon box */}
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border bg-gradient-to-br ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.Icon
                  weight="duotone"
                  className={`h-7 w-7 ${feature.iconColor}`}
                />
              </div>

              {/* Ghost large icon watermark */}
              <div className="pointer-events-none absolute right-6 top-6 opacity-[0.04]">
                <feature.Icon weight="fill" className="h-28 w-28" />
              </div>

              <h3 className="font-heading text-2xl text-deep-moss">{feature.title}</h3>
              <p className="mt-3 font-sans text-base font-light leading-relaxed text-muted-pine">
                {feature.description}
              </p>

              {/* Read more link */}
              <a
                href="#"
                className={`mt-6 inline-flex items-center gap-1.5 font-sans text-sm font-semibold ${feature.accent} transition-gap duration-200 hover:gap-2.5`}
              >
                Learn more
                <span>→</span>
              </a>
            </CeramicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
