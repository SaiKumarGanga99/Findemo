"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "Stripe", src: "/logos/stripe-wordmark.svg" },
  { name: "Shopify", src: "/logos/shopify-wordmark.svg" },
  { name: "Slack", src: "/logos/slack-wordmark.svg" },
  { name: "Dropbox", src: "/logos/dropbox-wordmark.svg" },
  { name: "Airbnb", src: "/logos/airbnb-wordmark.svg" },
];

export default function LogoBar() {
  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
          Trusted by leading teams
        </p>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 w-max animate-marquee"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {/* Repeat logos twice to loop smoothly */}
            {[...logos, ...logos].map((logo, idx) => (
              <Image
                key={idx}
                src={logo.src}
                alt={logo.name}
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
