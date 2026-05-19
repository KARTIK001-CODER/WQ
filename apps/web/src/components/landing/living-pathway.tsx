import { cn } from "@/lib/cn";

const milestones = [
  {
    step: "01",
    title: "Plant the Seed",
    description:
      "Create your account and set your learning intentions. Every great mind begins with a single curious thought.",
    color: "verdant",
    dotClass: "border-verdant bg-white shadow-[0_0_0_4px_rgba(61,140,111,0.15)]",
    innerDot: "bg-verdant",
    badgeBg: "bg-verdant/10 text-verdant border-verdant/25",
  },
  {
    step: "02",
    title: "Nurture Daily",
    description:
      "Follow your personalized path with bite-sized lessons that compound. Consistency turns saplings into forests.",
    color: "sea-foam",
    dotClass: "border-sea-foam bg-white shadow-[0_0_0_4px_rgba(107,181,161,0.15)]",
    innerDot: "bg-sea-foam",
    badgeBg: "bg-sea-foam/10 text-sea-foam border-sea-foam/25",
  },
  {
    step: "03",
    title: "Grow Strong",
    description:
      "Master skills through hands-on projects and live collaboration. Deep roots require resistance and challenge.",
    color: "sunlight",
    dotClass: "border-sunlight bg-white shadow-[0_0_0_4px_rgba(242,201,76,0.15)]",
    innerDot: "bg-sunlight",
    badgeBg: "bg-sunlight/10 text-sunlight border-sunlight/25",
  },
  {
    step: "04",
    title: "Bear Fruit",
    description:
      "Earn verifiable certificates and share your achievements with the world. Your harvest is real and recognized.",
    color: "deep-moss",
    dotClass: "border-deep-moss bg-white shadow-[0_0_0_4px_rgba(30,45,38,0.15)]",
    innerDot: "bg-deep-moss",
    badgeBg: "bg-deep-moss/10 text-deep-moss border-deep-moss/25",
  },
];

export default function LivingPathway() {
  return (
    <section
      id="pathway"
      className="relative overflow-hidden bg-[#EDF5F1] py-28 lg:py-36"
    >
      {/* Texture noise overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Orbs */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(61,140,111,0.10)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,181,161,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-24 text-center">
          <span className="mb-5 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-verdant">
            Your Journey
          </span>
          <h2 className="font-heading text-4xl tracking-tight text-deep-moss sm:text-5xl lg:text-6xl">
            A Clear Path to{" "}
            <em className="font-light not-italic text-verdant">Mastery</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-pine">
            Growth is not a sprint — it&apos;s a natural cycle. Follow the
            rhythm of your own learning journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical gradient stem */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] md:left-1/2 md:-translate-x-px bg-gradient-to-b from-verdant via-sea-foam via-sunlight to-deep-moss rounded-full opacity-30" />

          <div className="flex flex-col gap-16 md:gap-20">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                  <div
                    key={m.step}
                    className={cn(
                      "relative flex items-start gap-0 md:items-center",
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    )}
                  >
                  {/* Content card */}
                  <div
                    className={cn(
                      "flex-1 pl-14 md:pl-0",
                      isLeft ? "md:pr-16 md:text-right" : "md:pl-16"
                    )}
                  >
                    <div
                      className={cn(
                        "inline-block rounded-2xl border border-mist-border/80 bg-white/80 p-7",
                        "shadow-[0_8px_32px_-8px_rgba(61,140,111,0.08)] backdrop-blur-sm",
                        "transition-all duration-300 hover:-translate-y-1",
                        "hover:shadow-[0_16px_40px_-8px_rgba(61,140,111,0.12)]",
                        isLeft && "md:ml-auto"
                      )}
                    >
                      <span
                        className={cn(
                          "mb-3 inline-block rounded-full border px-3 py-1 font-sans",
                          "text-[10px] font-bold uppercase tracking-[0.2em]",
                          m.badgeBg
                        )}
                      >
                        Step {m.step}
                      </span>
                      <h3 className="font-heading text-2xl text-deep-moss">
                        {m.title}
                      </h3>
                      <p className="mt-2 max-w-sm font-sans text-base font-light leading-relaxed text-muted-pine">
                        {m.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot on the stem */}
                  <div className="absolute left-6 top-8 z-10 md:static md:left-auto md:top-auto md:flex md:h-auto md:w-auto md:items-center md:justify-center">
                    <div
                      className={cn(
                        "h-7 w-7 -translate-x-[13px] rounded-full border-[3px] md:translate-x-0 md:mx-0",
                        m.dotClass
                      )}
                    >
                      <div className="flex h-full items-center justify-center">
                        <div className={`h-2 w-2 rounded-full ${m.innerDot}`} />
                      </div>
                    </div>
                  </div>

                  {/* Empty spacer for alternating layout */}
                  <div className="hidden flex-1 md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
