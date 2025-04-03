"use client";

import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";

export default function HeroSection() {
  return (
   // <section className="relative overflow-hidden bg-orange-600 text-white">
    //<section className="relative overflow-hidden bg-gray-50 text-gray-900">
    //<section className="relative overflow-hidden bg-gray-100 text-gray-900">
    <section className="relative overflow-hidden bg-gray-100 text-black">



        
      {/* Glossy overlay */}
 

      {/* Hero + LogoBar */}
      <div className="relative z-10">
        <Hero />
        {/* 🔥 Gradient patch to fix the fade feeling */}
        <LogoBar />
      </div>

      {/* Bottom wave */}   
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
          className="w-full h-20 fill-white"
        >
          <path d="M0,0 C150,80 350,0 500,80 L500,00 L0,0 Z" />
        </svg>
      </div>
    </section>
  );
}
