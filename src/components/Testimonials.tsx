"use client";

import { motion } from "framer-motion";
import { Star, UserCircle } from "lucide-react";

const testimonials = [
  {
    name: "Alicia James",
    title: "Founder, Fresh Brew Co.",
    quote:
      "This platform gave me the cash flow I needed without the paperwork headache. I got funded in less than a day!",
  },
  {
    name: "Rahul Patel",
    title: "CEO, HexaLogix",
    quote:
      "Seamless, fast, and trustworthy. Exactly what small businesses need to stay afloat and grow.",
  },
  {
    name: "Maria Gomez",
    title: "Operations, Bloom Agency",
    quote:
      "I was shocked by how fast the funds came through. We’re now using it every month to manage invoices.",
  },
];

const fadeVariants = {
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
};

export default function Testimonials() {
  return (
    <section className="bg-orange-50 py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          What our customers are saying
        </h2>
        <p className="text-gray-700 mb-12 max-w-xl mx-auto">
          Join thousands of businesses using our platform to unlock fast, flexible funding.
        </p>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-orange-100 rounded-xl shadow p-6 text-left space-y-4 hover:shadow-md transition"
              variants={idx % 2 === 0 ? fadeVariants.left : fadeVariants.right}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-800 text-sm leading-relaxed italic">“{t.quote}”</p>

              {/* User info */}
              <div className="flex items-center gap-4 pt-4">
                <UserCircle className="w-10 h-10 text-gray-500" />
                <div>
                  <p className="text-sm font-semibold text-black">{t.name}</p>
                  <p className="text-xs text-gray-600">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
