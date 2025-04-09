"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] });

const steps = [
  {
    title: "Quick Signup",
    description:
      "Open a free online account in minutes — no paperwork or hidden fees. Our sign-up is simple, fast, and entirely digital.",
  },
  {
    title: "Add Invoices",
    description:
      "Submit invoices from your chosen clients. Only get paid for what you select. Update clients with your Findigm payment details for direct processing.",
  },
  {
    title: "Verify and Approve",
    description:
      "We assess your creditworthiness using financial and public data. Most approvals are processed within minutes.",
  },
  {
    title: "Receive Funds",
    description:
      "Receive cash directly to your bank account. Choose ACH or wire transfer — funds are deposited quickly and transparently.",
  },
];

const highlights = [
  {
    icon: "/logos/Funding.png",
    title: "Smart, Streamlined Access",
    description:
      "Access funds fast using our fully automated, online platform that connects you to global funding sources without red tape.",
  },
  {
    icon: "/logos/CapGrowth.png",
    title: "No Lock-ins, Just Freedom",
    description:
      "Use our platform only when you need to. No subscriptions, no contracts, and absolutely no hidden fees.",
  },
  {
    icon: "/logos/EasyExp.png",
    title: "Powerful Yet Simple",
    description:
      "Seamless integration with your invoicing tools. Get started in minutes and keep control with transparent pricing.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#FAF4EF] py-28 px-6">
      <div className={`max-w-6xl mx-auto ${plusJakarta.className}`}>
        {/* Heading Section */}
        <div className="bg-[#FFC160] rounded-2xl px-6 md:px-16 py-16 text-left md:grid md:grid-cols-2 md:items-center md:gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Accelerate Your Growth with Flexible Invoice Financing
            </h2>
          </div>
          <div>
            <p className="text-black text-lg md:text-xl">
              If you’re a growing business or freelancer looking for fast and flexible funding, Findigm offers a paperless, modern platform to unlock your cash flow instantly.
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mt-20 flex flex-col items-center gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white w-full md:w-[60%] rounded-xl shadow-lg p-8 md:p-10 text-left border border-gray-200"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="text-3xl font-bold text-orange-500">{index + 1}.</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 bg-white shadow-lg rounded-2xl border border-teal-700 px-6 md:px-12 py-14"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center md:text-left">
            Next-Gen Invoice Financing, Built for You
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {highlights.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <Image src={item.icon} alt={item.title} width={80} height={80} className="mx-auto" />
                <h4 className="font-semibold text-teal-800 text-lg">{item.title}</h4>
                <p className="text-gray-700 text-sm max-w-xs mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
