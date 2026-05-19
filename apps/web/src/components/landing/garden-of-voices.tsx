import { Star } from "@phosphor-icons/react/dist/ssr";
import CeramicCard from "@/components/landing/ui/ceramic-card";

const testimonials = [
  {
    quote:
      "This platform transformed how I learn. The focus mode alone is worth the subscription — it's like a greenhouse for my concentration.",
    name: "Sarah K.",
    course: "UX Design",
    initials: "SK",
    color: "bg-verdant",
    glow: "verdant" as const,
  },
  {
    quote:
      "Finally, an LMS that feels calm and intentional. My productivity has doubled since I stopped fighting my own learning environment.",
    name: "Marcus T.",
    course: "Web Development",
    initials: "MT",
    color: "bg-sea-foam",
    glow: "seafoam" as const,
  },
  {
    quote:
      "The AI tutor is like having a patient mentor available 24/7. It actually understands where I'm struggling and meets me there.",
    name: "Priya R.",
    course: "Data Science",
    initials: "PR",
    color: "bg-sunlight",
    glow: "sunlight" as const,
  },
];

export default function GardenOfVoices() {
  return (
    <section className="relative overflow-hidden bg-morning-mist py-28 lg:py-36">
      {/* Background */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(61,140,111,0.06)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(242,201,76,0.06)_0%,transparent_70%)]" />

      {/* Top divider */}
      <div className="mx-auto mb-24 h-px max-w-7xl bg-gradient-to-r from-transparent via-muted-pine/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="mb-5 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-verdant">
            The Garden of Voices
          </span>
          <h2 className="font-heading text-4xl tracking-tight text-deep-moss sm:text-5xl lg:text-6xl">
            What Our Learners{" "}
            <em className="font-light not-italic text-sea-foam">Say</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-muted-pine">
            Hear from the scholars who cultivate their minds here every day.
          </p>
        </div>

        {/* 3-column testimonials */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <CeramicCard key={t.name} glowColor={t.glow} className="p-8 flex flex-col">
              {/* Stars */}
              <div className="mb-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} weight="fill" className="h-4 w-4 text-sunlight" />
                ))}
              </div>

              {/* Decorative quote mark */}
              <p className="pointer-events-none absolute right-6 top-4 font-heading text-8xl leading-none text-muted-pine/8 select-none">
                &ldquo;
              </p>

              {/* Quote */}
              <p className="flex-1 font-sans text-base font-light italic leading-relaxed text-muted-pine">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="mt-8 flex items-center gap-4 border-t border-muted-pine/10 pt-6">
                <div
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full ${t.color} font-sans text-sm font-bold text-white shadow-md`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-sans font-semibold text-deep-moss">{t.name}</p>
                  <p className="font-sans text-sm text-muted-pine">{t.course}</p>
                </div>
              </div>
            </CeramicCard>
          ))}
        </div>

        {/* Bottom social proof strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {[
            { label: "Active Learners", value: "10,000+" },
            { label: "Courses Published", value: "500+" },
            { label: "Avg. Rating", value: "4.9 ★" },
            { label: "Countries", value: "48" },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="font-heading text-xl font-semibold text-deep-moss">{value}</p>
              <p className="font-sans text-sm text-muted-pine">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
