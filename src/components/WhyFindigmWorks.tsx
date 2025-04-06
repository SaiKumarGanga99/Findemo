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
    <section className="bg-[#fefaf6] py-28 px-6">
      <div className={`max-w-6xl mx-auto text-center ${plusJakarta.className}`}>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How Findigm Works</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          We make invoice financing fast, flexible, and painless. Here's what your journey looks like:
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-400 relative"
            >
              <div className="absolute -left-4 top-6 w-8 h-8 bg-[#E07A5F] text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 ml-6">{step.title}</h3>
              <p className="text-gray-700 ml-6 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-white shadow-lg rounded-2xl border border-teal-700 px-6 md:px-12 py-14"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-12">Next-Gen Invoice Financing, Built for You</h3>

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
