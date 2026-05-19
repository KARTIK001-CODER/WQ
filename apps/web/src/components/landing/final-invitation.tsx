import GlazedButton from "@/components/landing/ui/glazed-button";

const footerLinks = ["About", "Courses", "Blog", "Privacy", "Terms", "Contact"];

export default function FinalInvitation() {
  return (
    <section className="relative overflow-hidden bg-deep-moss">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(61,140,111,0.25)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,181,161,0.15)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,201,76,0.10)_0%,transparent_70%)]" />

      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle,#F6FAF8_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Decorative horizontal line */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="h-px bg-gradient-to-r from-transparent via-sea-foam/30 to-transparent" />
      </div>

      {/* Main CTA content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center md:px-12 lg:px-20">
        {/* Icon badge */}
        <div className="mx-auto mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-sunlight/25 bg-sunlight/10 shadow-[0_0_30px_rgba(242,201,76,0.15)]">
          <svg
            className="h-7 w-7 text-sunlight"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>

        {/* Overline */}
        <p className="mb-6 font-sans text-xs font-bold uppercase tracking-[0.35em] text-sunlight">
          Begin Your Cultivation
        </p>

        {/* Headline */}
        <h2 className="font-heading text-4xl leading-[1.15] tracking-tight text-morning-mist sm:text-5xl lg:text-6xl xl:text-7xl">
          The Garden Is Yours
          <br />
          <span className="font-light italic text-sea-foam">to Cultivate.</span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-8 max-w-xl font-sans text-lg font-light leading-relaxed text-morning-mist/60">
          Start today. Grow a little, every day. Your future self will thank you
          for the seeds you plant right now.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <GlazedButton href="/register" variant="sunlight" size="lg">
            Start Your Journey
          </GlazedButton>
          <GlazedButton
            href="#features"
            variant="ghost"
            size="lg"
            className="border-morning-mist/25 text-morning-mist hover:border-morning-mist/50 hover:bg-morning-mist/10 hover:text-morning-mist"
          >
            Explore Features
          </GlazedButton>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-morning-mist/35">
          {[
            "✓ 14-day free trial",
            "✓ No credit card",
            "✓ Cancel anytime",
          ].map((item) => (
            <span key={item} className="font-sans text-sm font-medium tracking-wide">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:px-20">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm">
                <img 
                  src="/aethera-logo.png" 
                  alt="Aethera Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-heading text-lg tracking-wide text-morning-mist">
                AETHERA
              </span>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-sans text-sm font-medium text-sea-foam/50 transition-colors duration-200 hover:text-sea-foam"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <p className="font-sans text-xs font-light tracking-wide text-sea-foam/30">
              © {new Date().getFullYear()} AETHERA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
