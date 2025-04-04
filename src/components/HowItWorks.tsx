"use client";

import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] });

const cardData = [
  {
    title: "💸 Instant Payouts",
    description: "Get paid in as little as 24 hours after uploading an invoice.",
    bg: "bg-orange-50 text-orange-800",
  },
  {
    title: "🔒 Fully Secure",
    description: "End-to-end encrypted data and banking-level compliance.",
    bg: "bg-orange-100 text-orange-900",
  },
  {
    title: "🌍 Global Reach",
    description: "Finance invoices from clients in 120+ countries.",
    bg: "bg-orange-50 text-orange-800",
  },
  {
    title: "🔁 Flexible Terms",
    description: "Customize fees, repayment schedules, and payout windows.",
    bg: "bg-orange-100 text-orange-900",
  },
];

export default function HowItWorks() {
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    //<section className="py-24 px-6" style={{ backgroundColor: '#FAF4EF' }}>
    <section className="bg-white py-24 px-6">
      <div className={`max-w-6xl mx-auto text-center ${plusJakarta.className}`}>
        <h2 className="text-4xl font-bold text-orange-600 mb-4 inline-block relative">
          <span className="relative z-10">How It Works</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-300 rounded-md blur-sm -z-10"></span>
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Fast, transparent, and compliant. Here's how Findigm helps you turn invoices into instant growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {cardData.map((card, i) => (
            <motion.div
              key={i}
              className={`rounded-xl p-6 shadow-md ${card.bg}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={i}
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold mb-2 text-orange-700">{card.title}</h3>
              <p className="text-sm leading-relaxed text-black">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
