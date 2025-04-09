"use client";

import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] });

const cardData = [
  {
    title: "Step 1: Upload Your Invoice",
    description: "Submit your outstanding invoice through our secure platform to initiate the process.",
    bg: "bg-orange-50 text-orange-800",
  },
  {
    title: "Step 2: Get Verified",
    description: "Our system evaluates your submission and approves your request within hours.",
    bg: "bg-orange-100 text-orange-900",
  },
  {
    title: "Step 3: Receive Funds",
    description: "Once verified, funds are deposited directly into your account—fast and hassle-free.",
    bg: "bg-orange-50 text-orange-800",
  },
  {
    title: "Step 4: Repay Flexibly",
    description: "Settle your advance with flexible terms that work around your cash flow.",
    bg: "bg-orange-100 text-orange-900",
  },
];

export default function HowItWorks() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className={`max-w-3xl mx-auto text-center ${plusJakarta.className}`}>
        <h2 className="text-4xl font-bold text-orange-600 mb-4 inline-block relative">
          <span className="relative z-10">How It Works</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-300 rounded-md blur-sm -z-10"></span>
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Fast, transparent, and compliant. Here's how Findigm helps you turn invoices into instant growth.
        </p>

        <div className="flex flex-col gap-8">
          {cardData.map((card, i) => (
            <motion.div
              key={i}
              className={`rounded-xl p-6 shadow-md ${card.bg}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              custom={i}
              variants={cardVariants}
            >
              <h3 className="text-2xl font-bold mb-2 text-orange-700">{card.title}</h3>
              <p className="text-base leading-relaxed text-black">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
