import { cn } from "@/lib/cn";
import HeroSection from "@/components/landing/hero-section";
import FeatureCanopy from "@/components/landing/feature-canopy";
import LivingPathway from "@/components/landing/living-pathway";
import GardenOfVoices from "@/components/landing/garden-of-voices";
import PricingClearing from "@/components/landing/pricing-clearing";
import FinalInvitation from "@/components/landing/final-invitation";
import GlazedButton from "@/components/landing/ui/glazed-button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#pathway" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
];

export default function LandingPage() {
  return (
    <>
      {/* ── Sticky Navigation ─────────────────────────────────── */}
      <header className="fixed top-0 z-50 w-full">
        <div className="mx-auto max-w-7xl px-6 pt-4 md:px-12 lg:px-20">
          <nav className="flex items-center justify-between rounded-2xl border border-mist-border/60 bg-white/70 px-6 py-3.5 shadow-[0_4px_24px_-4px_rgba(61,140,111,0.08)] backdrop-blur-xl">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm">
                <img 
                  src="/aethera-logo.png" 
                  alt="Aethera Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-heading text-lg font-semibold tracking-wide text-deep-moss">
                AETHERA
              </span>
            </a>

            {/* Nav links */}
            <div className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm font-medium text-muted-pine transition-colors duration-200 hover:text-deep-moss"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-3">
              <a
                href="/login"
                className="hidden font-sans text-sm font-medium text-muted-pine transition-colors hover:text-deep-moss md:block"
              >
                Sign in
              </a>
              <GlazedButton href="/register" variant="verdant" size="sm">
                Get Started
              </GlazedButton>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Main Content ──────────────────────────────────────── */}
      <main>
        <HeroSection />
        <FeatureCanopy />
        <LivingPathway />
        <GardenOfVoices />
        <PricingClearing />
        <FinalInvitation />
      </main>
    </>
  );
}
