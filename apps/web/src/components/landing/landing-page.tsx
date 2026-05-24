"use client";

import { LandingNavbar } from "./navbar";
import { LandingHero } from "./hero";
import { Philosophy } from "./philosophy";
import { WorkspacePreview } from "./workspace-preview";
import { AiTutorPreview } from "./ai-tutor-preview";
import { CtaSection } from "./cta-section";
import { LandingFooter } from "./footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg">
      <LandingNavbar />
      <LandingHero />
      <Philosophy />
      <WorkspacePreview />
      <AiTutorPreview />
      <CtaSection />
      <LandingFooter />
    </div>
  );
}
