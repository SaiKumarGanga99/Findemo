import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import WhatIsInvoiceFinancing from "@/components/WhatIsInvoiceFinancing";
import ProductHighlights from "@/components/ProductHighlights";
import EligibilityAndPricing from "@/components/EligibilityAndPricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Sticky Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    {/* Left: Logo */}
   {/*<div className="text-2xl font-bold">FUN-NANCE.</div>*/}
   <div className="flex items-center h-12">
  <img
    src="/logos/Findigm.png"
    alt="Fintec logo"
    className="h-full object-contain max-h-12"
  />
</div>


    {/* Center: Nav Links */}
    <nav className="hidden md:flex gap-6 text-sm font-medium">
      <a href="#" className="hover:text-black">Platform</a>
      <a href="#" className="hover:text-black">Solutions</a>
      <a href="#" className="hover:text-black">Why FUN-NANCE</a>
      <a href="#" className="hover:text-black">Coverage</a>
      <a href="#" className="hover:text-black">Pricing</a>
      <a href="#" className="hover:text-black">Resources</a>
    </nav>

    {/* Right: Buttons */}
    <div className="flex gap-4">
      <button className="px-4 py-1.5 rounded-full border border-gray-300 text-sm hover:bg-gray-100">
        Log in
      </button>
      <button className="px-4 py-1.5 rounded-full bg-black text-white text-sm hover:bg-gray-900">
        Book a demo
      </button>
    </div>
  </div>
</header>

      {/* Hero Section (with top padding so it doesn't hide) */}
      <div className="pt-24">
        <HeroSection />
        <WhatIsInvoiceFinancing />
        <ProductHighlights />
        <EligibilityAndPricing />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
