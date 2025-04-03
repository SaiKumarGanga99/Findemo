"use client"; // Enables client-side interactivity like animation

import { motion } from "framer-motion";

// ✅ 1. Info card content — title, description, and background colors
const cardData = [
  {
    title: "💸 Instant Payouts",
    description: "Get paid in as little as 24 hours after uploading an invoice.",
    bg: "bg-orange-50 text-orange-800", // lighter background
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

export default function WhatIsInvoiceFinancing() {
  // ✅ 2. Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, x: -50 }, // off-screen
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // stagger based on index
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* ✅ Section heading */}
        <h2 className="text-4xl font-bold text-orange-600">
          What is Invoice Financing?
        </h2>

        {/* ✅ Description paragraph */}
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Turn your unpaid invoices into working capital — without waiting 30, 60, or 90 days.
          We make financing fast, simple, and transparent.
        </p>

        {/* ✅ Animated info card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
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
              {/* ✅ Card title in bold orange */}
              <h3 className="text-xl font-semibold mb-2 text-orange-700">{card.title}</h3>

              {/* ✅ Description in dark gray for readability */}
              <p className="text-sm leading-relaxed text-black">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
