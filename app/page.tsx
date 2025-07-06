import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Trust from "@/components/Trust";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-background text-text">
    <Hero />
    <HowItWorks />
    <Features />
    <Trust />
    <CTA />
    </main>
  );
}
