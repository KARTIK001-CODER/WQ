import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Trust from "@/components/landing/trust";
import ProductShowcase from "@/components/landing/product-showcase";
import AiExperience from "@/components/landing/ai-experience";
import Analytics from "@/components/landing/analytics";
import Gamification from "@/components/landing/gamification";
import Collaboration from "@/components/landing/collaboration";
import Workflow from "@/components/landing/workflow";
import Testimonials from "@/components/landing/testimonials";
import Cta from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <ProductShowcase />
        <AiExperience />
        <Analytics />
        <Gamification />
        <Collaboration />
        <Workflow />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
