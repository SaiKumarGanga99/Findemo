"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Poppins } from "next/font/google";

// Load Poppins font with selected weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Words that rotate every 1.5s in heading
const rotatingWords = ["Hire", "Onboard", "Pay", "Manage"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-100 text-gray-900">
      {/* Content wrapper */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-24 max-w-6xl mx-auto items-center">
        {/* Left - Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h1
            className={`text-4xl sm:text-5xl font-bold tracking-tight leading-[1.2] drop-shadow-lg space-y-4 flex flex-col ${poppins.className}`}
          >
            {/* Animated word with clipped shape */}
            <span
              className="inline-block text-white bg-orange-600 px-6 py-3 w-fit mx-auto md:mx-0 shadow-md"
              style={{
                clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                fontSize: "clamp(2.5rem, 6vw, 3.25rem)",
                fontWeight: 700,
              }}
            >
              {rotatingWords[index]}
            </span>

            {/* Static part of the heading */}
            <span className="text-black">
              the world’s best talent
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-lg text-gray-700">
            Turn unpaid invoices into fast, reliable working capital. We make financing smooth, secure, and instant.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <Button className="px-6 py-3 text-lg bg-black text-white font-semibold hover:bg-gray-900 shadow-md transition">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="#" className="text-sm underline text-orange-600 hover:text-orange-800 font-medium">
              Book a demo
            </a>
          </div>
        </div>

        {/* Right - Embedded Video */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[640px] h-[360px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            <iframe
              src="https://www.youtube.com/embed/2hdwjj7n48M?autoplay=1&mute=1&loop=1&playlist=2hdwjj7n48M"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
