"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] });

export default function Hero() {
  return (
    <section
      className="relative text-black px-4 overflow-hidden min-h-screen flex items-center"
      //style={{ backgroundColor: "#E07A5F" "#FFBC40"}}
      style={{ backgroundColor:"#FFC160"}}
    >
      {/* Decorative Background Shape */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <svg
          className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] opacity-10 text-white"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="300" fill="currentColor" />
        </svg>
        <svg
          className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] opacity-5 text-white"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="400" height="400" rx="200" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1
            className={`text-4xl sm:text-5xl font-semibold leading-tight tracking-tight ${plusJakarta.className}`}
          >
            Flexible Invoice Financing for Growing Businesses
          </h1>
          <p className="text-lg text-black/90 max-w-xl">
            Unlock fast, compliant capital by turning your outstanding invoices into growth opportunities — without the wait.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href = "/signup">
            <Button className="px-6 py-3 bg-black text-white hover:bg-gray-900 text-sm font-semibold" >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            </Link>
            <a href="#" className="text-sm font-medium underline text-black hover:text-black/80">
              Learn more
            </a>
          </div>
        </div>

        {/* Right: Video */}
        <div className="w-full max-w-[640px] mx-auto md:mx-0 h-[360px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/2hdwjj7n48M?autoplay=1&mute=1&loop=1&playlist=2hdwjj7n48M"
            title="Intro video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
