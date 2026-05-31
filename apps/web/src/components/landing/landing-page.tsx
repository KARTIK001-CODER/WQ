'use client';

import { ProgressBar } from '../ui/ProgressBar';
import { Navbar } from './navbar';
import { Hero } from './hero';
import { SocialProof } from './trust';
import { WorkspaceShowcase } from './product-showcase';
import { Features } from './feature-canopy';
import { Reviews } from './garden-of-voices';
import { Pricing } from './pricing-clearing';
import { FinalCTA } from './cta';
import { Footer } from './footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg">
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <WorkspaceShowcase />
        <Features />
        <Reviews />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
