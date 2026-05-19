import { Check } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";
import GlazedButton from "@/components/landing/ui/glazed-button";

const plans = [
  {
    name: "Starter",
    tier: "FREE",
    price: "$0",
    period: "",
    description: "Start your learning journey with the essentials. No credit card required.",
    features: [
      "5 courses per month",
      "Basic AI summaries",
      "Community access",
      "Progress tracking",
    ],
    ctaVariant: "ghost" as const,
    cta: "Get Started",
    href: "/register",
    popular: false,
    dark: false,
  },
  {
    name: "Garden",
    tier: "MOST POPULAR",
    price: "$29",
    period: "/mo",
    description: "For dedicated learners ready to grow deeper and faster.",
    features: [
      "Unlimited courses",
      "Full AI tutor & pathing",
      "Verifiable certificates",
      "Deep focus mode",
      "Priority support",
      "Collaboration rooms",
    ],
    ctaVariant: "verdant" as const,
    cta: "Start Free Trial",
    href: "/register?plan=pro",
    popular: true,
    dark: false,
  },
  {
    name: "Aethera",
    tier: "ENTERPRISE",
    price: "Custom",
    period: "",
    description: "The full ecosystem for teams, organizations, and institutions.",
    features: [
      "Everything in Garden",
      "Custom branding",
      "Analytics dashboard",
      "SSO & integrations",
      "Dedicated mentor",
      "White-label options",
    ],
    ctaVariant: "ghost" as const,
    cta: "Contact Sales",
    href: "/contact",
    popular: false,
    dark: true,
  },
];

export default function PricingClearing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#EDF5F1] py-28 lg:py-36"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(61,140,111,0.08)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(107,181,161,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="mb-5 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-verdant">
            Invest in Growth
          </span>
          <h2 className="font-heading text-4xl tracking-tight text-deep-moss sm:text-5xl lg:text-6xl">
            Simple, Transparent{" "}
            <em className="font-light not-italic text-verdant">Pricing</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-muted-pine">
            Whether you&apos;re planting your first seed or cultivating a whole
            orchard — there&apos;s a space for you.
          </p>
        </div>

        {/* Cards grid — all same size, no elevation difference */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          {plans.map((plan) => {
            const isDark = plan.dark;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-2xl p-8 lg:p-10",
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
                  isDark
                    ? "bg-deep-moss shadow-[0_8px_32px_-8px_rgba(30,45,38,0.35)]"
                    : isPopular
                    ? "bg-white shadow-[0_8px_32px_-8px_rgba(61,140,111,0.12)] ring-2 ring-verdant/25"
                    : "bg-white shadow-[0_8px_32px_-8px_rgba(61,140,111,0.06)]"
                )}
              >
                {/* Popular ribbon — visual only, no height change */}
                {isPopular && (
                  <div className="absolute right-6 top-0 -translate-y-1/2">
                    <span className="inline-flex items-center rounded-full bg-verdant px-4 py-1.5 font-sans text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Top accent line */}
                <div
                  className={cn(
                    "absolute left-8 right-8 top-0 h-[2px] rounded-full",
                    isDark
                      ? "bg-gradient-to-r from-transparent via-sunlight/60 to-transparent"
                      : isPopular
                      ? "bg-gradient-to-r from-transparent via-verdant/60 to-transparent"
                      : "bg-gradient-to-r from-transparent via-sea-foam/50 to-transparent"
                  )}
                />

                {/* Tier label */}
                <p className={cn(
                  "mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.28em]",
                  isDark ? "text-sunlight/70" : isPopular ? "text-verdant/70" : "text-sea-foam/70"
                )}>
                  {plan.tier}
                </p>

                {/* Plan name */}
                <h3 className={cn("font-heading text-2xl", isDark ? "text-morning-mist" : "text-deep-moss")}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-1">
                  <span className={cn(
                    "font-heading text-5xl font-semibold tracking-tight lg:text-6xl",
                    isDark ? "text-morning-mist" : "text-deep-moss"
                  )}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`font-sans text-sm ${isDark ? "text-morning-mist/50" : "text-muted-pine"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className={cn(
                  "mt-4 font-sans text-sm font-light leading-relaxed",
                  isDark ? "text-morning-mist/55" : "text-muted-pine"
                )}>
                  {plan.description}
                </p>

                {/* Divider */}
                <div className={cn("my-7 h-px w-full", isDark ? "bg-white/10" : "bg-muted-pine/10")} />

                {/* Features — flex-1 keeps CTA at bottom */}
                <ul className="flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={cn(
                        "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full",
                        isDark ? "bg-sunlight/15" : isPopular ? "bg-verdant/10" : "bg-sea-foam/10"
                      )}>
                        <Check weight="bold" className={cn(
                          "h-3 w-3",
                          isDark ? "text-sunlight" : isPopular ? "text-verdant" : "text-sea-foam"
                        )} />
                      </span>
                      <span className={cn(
                        "font-sans text-sm font-light",
                        isDark ? "text-morning-mist/80" : "text-deep-moss"
                      )}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-10">
                  <GlazedButton
                    href={plan.href}
                    variant={isDark ? "sunlight" : isPopular ? "verdant" : "ghost"}
                    size="md"
                    className="w-full justify-center"
                  >
                    {plan.cta}
                  </GlazedButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="mt-14 text-center font-sans text-sm font-light text-muted-pine">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
