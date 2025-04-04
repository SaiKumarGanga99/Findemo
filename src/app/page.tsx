"use client";

import { Button } from "@/components/ui/button";
//import HeroSection from "@/components/HeroSection";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ImpactMetrics from "@/components/ImpactMetrics";
import WhyFindigmWorks from "@/components/WhyFindigmWorks";
import LogoBar from "@/components/LogoBar";
//import ProductHighlights from "@/components/ProductHighlights";
import EligibilityAndPricing from "@/components/EligibilityAndPricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"; // <-- Import new Navbar component

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section (with top padding so it doesn't hide) */}
      <div className="pt-20">
        <Hero />
        {/*<HowItWorks />*/}
        <WhyFindigmWorks />
        <ImpactMetrics />
        <LogoBar />
        <EligibilityAndPricing />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
